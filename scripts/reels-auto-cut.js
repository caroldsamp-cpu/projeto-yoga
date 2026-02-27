#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const cp = require("child_process");

function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token.startsWith("--")) continue;
    const key = token.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) {
      args[key] = true;
      continue;
    }
    args[key] = next;
    i += 1;
  }
  return args;
}

function requireArg(args, key) {
  if (!args[key]) throw new Error(`Missing --${key}`);
  return args[key];
}

function run(command, commandArgs) {
  return cp.execFileSync(command, commandArgs, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
}

function getDurationSeconds(videoPath) {
  const out = run("ffprobe", [
    "-v",
    "error",
    "-show_entries",
    "format=duration",
    "-of",
    "default=noprint_wrappers=1:nokey=1",
    videoPath,
  ]);
  const duration = Number(out.trim());
  if (!Number.isFinite(duration) || duration <= 0) throw new Error("Could not read video duration with ffprobe");
  return duration;
}

function normalizeText(text) {
  return text.replace(/\r/g, "").replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n").trim();
}

function normalizeForMatch(text) {
  return String(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function splitIntoBlocks(text) {
  const rawBlocks = text.split(/\n{2,}/).map((x) => x.trim()).filter(Boolean);
  const blocks = [];
  for (const raw of rawBlocks) {
    if (raw.length < 40) continue;
    const sentences = raw
      .split(/(?<=[.!?])\s+/)
      .map((x) => x.trim())
      .filter(Boolean);
    if (sentences.length <= 1 && raw.length > 260) {
      const chunks = raw.split(/,\s+/).map((x) => x.trim()).filter(Boolean);
      for (let i = 0; i < chunks.length; i += 3) {
        const chunk = chunks.slice(i, i + 3).join(", ");
        if (chunk.length >= 45) blocks.push(chunk);
      }
    } else {
      blocks.push(...sentences);
    }
  }
  return blocks.filter((x) => x.length >= 45);
}

function wordsCount(text) {
  return (text.match(/\S+/g) || []).length;
}

function hasAnyToken(text, tokens) {
  const lower = normalizeForMatch(text);
  return tokens.some((t) => lower.includes(normalizeForMatch(t)));
}

function scoreBlock(text, tokens) {
  const lower = normalizeForMatch(text);
  const keywordWeights = [
    ["presen", 2.2],
    ["respir", 2.0],
    ["sadhana", 2.6],
    ["sem culpa", 2.5],
    ["constan", 2.1],
    ["leveza", 2.0],
    ["vida real", 2.2],
    ["ritual", 2.0],
    ["perfeit", 1.8],
    ["desaceler", 2.0],
    ["voltar", 1.5],
    ["voce topa", 2.4],
    ["voce nao precisa", 2.0],
    ["imagina", 1.3],
    ["deixa eu te", 1.2],
    ["percebe", 1.3],
  ];

  let score = 0;
  for (const [needle, weight] of keywordWeights) {
    if (lower.includes(needle)) score += weight;
  }

  if (tokens.length > 0 && hasAnyToken(text, tokens)) score += 5.0;
  if (/[?]/.test(text)) score += 0.7;
  if (/[!]/.test(text)) score += 0.4;
  if (text.length >= 80 && text.length <= 260) score += 0.8;

  const wc = wordsCount(text);
  if (wc >= 16 && wc <= 70) score += 1.0;
  return score;
}

function pickTopCandidates(candidates, count, minGapSeconds) {
  const selected = [];
  const sorted = [...candidates].sort((a, b) => b.score - a.score);
  for (const c of sorted) {
    if (selected.length >= count) break;
    const overlaps = selected.some((s) => Math.abs(s.start - c.start) < minGapSeconds);
    if (!overlaps) selected.push(c);
  }
  return selected.sort((a, b) => a.start - b.start);
}

function enforceMustInclude(selected, candidates, tokens, minGapSeconds) {
  if (tokens.length === 0) return selected;
  if (selected.some((x) => hasAnyToken(x.text, tokens))) return selected;

  const options = candidates
    .filter((c) => hasAnyToken(c.text, tokens))
    .sort((a, b) => (b.score + b.start * 0.02) - (a.score + a.start * 0.02));

  if (options.length === 0 || selected.length === 0) return selected;
  const preferred = options[0];

  const replaceIdx = selected.findIndex((s) => Math.abs(s.start - preferred.start) >= minGapSeconds);
  const clone = [...selected];
  if (replaceIdx >= 0) {
    clone[replaceIdx] = preferred;
  } else {
    clone[clone.length - 1] = preferred;
  }
  return clone.sort((a, b) => a.start - b.start);
}

function sanitizeHeadline(text, maxLen = 66) {
  const cleaned = text.replace(/\s+/g, " ").replace(/[“”"']/g, "").trim();
  if (cleaned.length <= maxLen) return cleaned;
  return `${cleaned.slice(0, maxLen - 1).trim()}…`;
}

function escapeDrawText(text) {
  return text
    .replace(/\\/g, "\\\\")
    .replace(/:/g, "\\:")
    .replace(/'/g, "\\'")
    .replace(/%/g, "\\%")
    .replace(/\[/g, "\\[")
    .replace(/\]/g, "\\]")
    .replace(/,/g, "\\,");
}

function toFfmpegSubtitlesPath(filePath) {
  return filePath.replace(/\\/g, "/").replace(/:/g, "\\:").replace(/'/g, "\\'");
}

function formatSeconds(n) {
  return Number(n.toFixed(3));
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function parseTokenList(raw) {
  if (!raw) return [];
  return String(raw)
    .split(",")
    .map((x) => normalizeForMatch(x.trim()))
    .filter(Boolean);
}

function main() {
  const args = parseArgs(process.argv);
  if (args.help) {
    console.log(`Usage:
  node scripts/reels-auto-cut.js --video <video.mp4> --transcript <text.txt> [--out outputs/reels-auto] [--count 6] [--min 24] [--max 42] [--srt captions.srt] [--must-include "sadhana,presenca"] [--min-tail-seconds 3] [--no-text] [--dry-run]

What it does:
  1) Reads transcript and estimates best highlights.
  2) Maps text offsets to video timestamps using ffprobe duration.
  3) Generates 9:16 reels via ffmpeg.
  4) Optional: burns subtitles from --srt.
`);
    return;
  }

  const videoPath = path.resolve(requireArg(args, "video"));
  const transcriptPath = path.resolve(requireArg(args, "transcript"));
  const outDir = path.resolve(args.out || "outputs/reels-auto");
  const count = Number(args.count || 6);
  const minDur = Number(args.min || 24);
  const maxDur = Number(args.max || 42);
  const dryRun = Boolean(args["dry-run"]);
  const noText = Boolean(args["no-text"]);
  const minTailSeconds = Number(args["min-tail-seconds"] || 0);
  const mustIncludeTokens = parseTokenList(args["must-include"]);
  const srtPath = args.srt ? path.resolve(args.srt) : null;

  if (!fs.existsSync(videoPath)) throw new Error(`Video not found: ${videoPath}`);
  if (!fs.existsSync(transcriptPath)) throw new Error(`Transcript not found: ${transcriptPath}`);
  if (srtPath && !fs.existsSync(srtPath)) throw new Error(`SRT not found: ${srtPath}`);
  if (!(count > 0)) throw new Error("--count must be > 0");
  if (!(minDur > 0 && maxDur >= minDur)) throw new Error("Invalid --min/--max");
  if (!(minTailSeconds >= 0 && minTailSeconds <= 20)) throw new Error("--min-tail-seconds must be between 0 and 20");

  const transcriptRaw = fs.readFileSync(transcriptPath, "utf8");
  const transcript = normalizeText(transcriptRaw);
  const blocks = splitIntoBlocks(transcript);
  if (blocks.length === 0) throw new Error("No usable blocks found in transcript");

  const duration = getDurationSeconds(videoPath);
  const totalWords = wordsCount(transcript);
  const wordsPerSecond = Math.max(1.6, totalWords / duration);

  const candidates = [];
  let wordsBefore = 0;
  for (const block of blocks) {
    const wc = wordsCount(block);
    const baseStart = wordsBefore / wordsPerSecond;
    wordsBefore += wc;

    const estDur = Math.min(maxDur, Math.max(minDur, wc / wordsPerSecond + 5));
    const start = Math.max(0, Math.min(duration - estDur, baseStart - 2));
    const score = scoreBlock(block, mustIncludeTokens);
    const hasMustInclude = hasAnyToken(block, mustIncludeTokens);
    const lateBonus = hasMustInclude ? (start / Math.max(duration, 1)) * 2.0 : 0;

    candidates.push({
      text: block,
      start: formatSeconds(start),
      duration: formatSeconds(estDur),
      score: formatSeconds(score + lateBonus),
      words: wc,
      has_must_include: hasMustInclude,
    });
  }

  const minGapSeconds = Math.max(minDur * 0.7, 12);
  let selected = pickTopCandidates(candidates, count, minGapSeconds);
  selected = enforceMustInclude(selected, candidates, mustIncludeTokens, minGapSeconds);

  ensureDir(outDir);

  const renders = [];
  for (let i = 0; i < selected.length; i += 1) {
    const c = selected[i];
    const clipIndex = String(i + 1).padStart(2, "0");
    const outputPath = path.join(outDir, `reel_${clipIndex}.mp4`);
    const headline = sanitizeHeadline(c.text);

    const renderStart = c.start;
    let renderDuration = c.duration;
    if (minTailSeconds > 0) {
      const desiredEnd = Math.min(duration, renderStart + renderDuration + minTailSeconds);
      renderDuration = formatSeconds(desiredEnd - renderStart);
    }

    const filterParts = [
      "crop='if(gte(iw/ih,9/16),ih*9/16,iw)':'if(gte(iw/ih,9/16),ih,iw*16/9)'",
      "scale=1080:1920",
    ];

    if (srtPath) filterParts.push(`subtitles='${toFfmpegSubtitlesPath(srtPath)}'`);

    if (!noText) {
      filterParts.push("drawbox=x=0:y=0:w=iw:h=220:color=black@0.38:t=fill");
      filterParts.push(`drawtext=text='${escapeDrawText(headline)}':x=(w-text_w)/2:y=68:fontcolor=white:fontsize=52:line_spacing=6:shadowcolor=black@0.9:shadowx=2:shadowy=2`);
    }

    const filter = filterParts.join(",");

    const ffmpegArgs = [
      "-y",
      "-ss",
      String(renderStart),
      "-i",
      videoPath,
      "-t",
      String(renderDuration),
      "-vf",
      filter,
      "-c:v",
      "libx264",
      "-preset",
      "medium",
      "-crf",
      "20",
      "-c:a",
      "aac",
      "-b:a",
      "160k",
      "-movflags",
      "+faststart",
      outputPath,
    ];

    renders.push({
      clip: clipIndex,
      output: outputPath,
      headline: noText ? null : headline,
      excerpt: c.text,
      start_sec: renderStart,
      duration_sec: renderDuration,
      score: c.score,
      has_must_include: c.has_must_include,
      ffmpeg: ["ffmpeg", ...ffmpegArgs].join(" "),
    });

    if (!dryRun) cp.execFileSync("ffmpeg", ffmpegArgs, { stdio: "inherit" });
  }

  const manifestPath = path.join(outDir, "cuts-manifest.json");
  fs.writeFileSync(
    manifestPath,
    JSON.stringify(
      {
        generated_at: new Date().toISOString(),
        video: videoPath,
        transcript: transcriptPath,
        srt: srtPath,
        must_include: mustIncludeTokens,
        min_tail_seconds: minTailSeconds,
        no_text: noText,
        duration_sec: formatSeconds(duration),
        words_per_second: formatSeconds(wordsPerSecond),
        dry_run: dryRun,
        reels: renders,
      },
      null,
      2
    )
  );

  console.log(`Done. Generated ${renders.length} reel plan(s).`);
  console.log(`Manifest: ${manifestPath}`);
  if (dryRun) console.log("Dry-run mode: no videos rendered. Remove --dry-run to render MP4 files.");
}

try {
  main();
} catch (err) {
  console.error(`[reels-auto-cut] ${err.message}`);
  process.exit(1);
}