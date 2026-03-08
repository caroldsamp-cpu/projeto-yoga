const fs = require("fs");
const path = require("path");
const yaml = require("../.aios-core/node_modules/js-yaml");

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function deepMerge(target, source) {
  if (!source || typeof source !== "object") return target;
  for (const key of Object.keys(source)) {
    const src = source[key];
    if (src && typeof src === "object" && !Array.isArray(src)) {
      if (!target[key] || typeof target[key] !== "object" || Array.isArray(target[key])) {
        target[key] = {};
      }
      deepMerge(target[key], src);
    } else {
      target[key] = src;
    }
  }
  return target;
}

function resolvePath(ctx, expr) {
  if (expr === ".") {
    return Object.prototype.hasOwnProperty.call(ctx, "__dot") ? ctx.__dot : ctx;
  }
  const parts = expr.split(".").flatMap((p) => {
    const m = p.match(/^([^\[]+)(\[\d+\])?$/);
    if (!m) return [p];
    const out = [m[1]];
    if (m[2]) out.push(m[2]);
    return out;
  });

  let cur = ctx;
  for (const part of parts) {
    if (part.startsWith("[") && part.endsWith("]")) {
      const idx = Number(part.slice(1, -1));
      if (!Array.isArray(cur) || Number.isNaN(idx)) return undefined;
      cur = cur[idx];
      continue;
    }
    if (cur == null || !Object.prototype.hasOwnProperty.call(cur, part)) return undefined;
    cur = cur[part];
  }
  return cur;
}

function renderTemplate(tpl, ctx) {
  const sectionRegex = /{{\s*([#^])\s*([A-Za-z0-9_.\[\]-]+|\.)\s*}}([\s\S]*?){{\s*\/\s*\2\s*}}/g;
  let out = tpl;
  let changed = true;

  while (changed) {
    changed = false;
    out = out.replace(sectionRegex, (_, type, name, inner) => {
      changed = true;
      const value = resolvePath(ctx, name);
      const truthy = Array.isArray(value) ? value.length > 0 : !!value;

      if (type === "^") {
        return truthy ? "" : renderTemplate(inner, ctx);
      }

      if (!truthy) return "";

      if (Array.isArray(value)) {
        return value
          .map((item) => {
            if (item && typeof item === "object" && !Array.isArray(item)) {
              return renderTemplate(inner, { ...ctx, ...item, __dot: item });
            }
            return renderTemplate(inner, { ...ctx, __dot: item });
          })
          .join("");
      }

      if (value && typeof value === "object") {
        return renderTemplate(inner, { ...ctx, ...value, __dot: value });
      }

      return renderTemplate(inner, ctx);
    });
  }

  return out.replace(/{{\s*([A-Za-z0-9_.\[\]-]+|\.)\s*}}/g, (_, name) => {
    const v = resolvePath(ctx, name);
    if (v == null) return "";
    if (typeof v === "object") return "";
    return String(v);
  });
}

function prepareContext(payload, tokensYaml) {
  const tokens = deepClone(tokensYaml);
  const override = (tokens.template_overrides || {})[payload.config.template] || {};
  const payloadOverride = payload.theme_overrides || {};

  if (override.global_colors) {
    deepMerge(tokens.global.colors, override.global_colors);
  }
  if (override.typography_heading_font) {
    tokens.global.typography.heading.font = override.typography_heading_font;
  }
  if (payloadOverride.global_colors) {
    deepMerge(tokens.global.colors, payloadOverride.global_colors);
  }
  if (payloadOverride.typography_heading_font) {
    tokens.global.typography.heading.font = payloadOverride.typography_heading_font;
  }

  const full = deepClone(payload);
  const nameParts = (full.hero.name || "").trim().split(/\s+/);
  full.hero.name_first = nameParts.slice(0, -1).join(" ") || full.hero.name;
  full.hero.name_last = nameParts.length > 1 ? nameParts[nameParts.length - 1] : "";

  full.photo.treatment_cinematic = full.photo.treatment === "cinematic";
  full.photo.treatment_clean = full.photo.treatment === "clean";
  full.photo.treatment_raw = full.photo.treatment === "raw";

  full.tier = {
    base: full.config.tier === "base",
    enhanced: full.config.tier === "enhanced" || full.config.tier === "maximum",
    maximum: full.config.tier === "maximum",
  };

  full.config.extra_fonts =
    full.config.template === "arctic_frost"
      ? "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap"
      : "";

  if (Array.isArray(full.proof?.items)) {
    full.proof.items = full.proof.items.map((item, i) => ({
      ...item,
      _separator: i !== 0,
      _reveal_delay: `delay-${i + 1}`,
    }));
  }
  if (Array.isArray(full.expertise?.cards)) {
    full.expertise.cards = full.expertise.cards.map((item, i) => ({
      ...item,
      _reveal_delay: `delay-${i + 1}`,
    }));
  }
  if (Array.isArray(full.stack?.items)) {
    full.stack.items = full.stack.items.map((item, i) => ({
      ...item,
      _reveal_delay: `delay-${i + 1}`,
    }));
  }

  if (!full.cta.heading_line1) full.cta.heading_line1 = full.cta.heading || "";
  if (!full.cta.heading_line2) full.cta.heading_line2 = "";

  if (full.footer?.copyright === "auto") {
    full.footer.copyright = `(c) ${new Date().getFullYear()} ${full.hero.name}`;
  }

  return {
    ...full,
    tokens,
  };
}

function main() {
  const payloadArg = process.argv[2];
  if (!payloadArg) {
    console.error("Usage: node scripts/generate-premium-lp.js <payload.yaml>");
    process.exit(1);
  }

  const payloadPath = path.resolve(payloadArg);
  const payload = yaml.load(fs.readFileSync(payloadPath, "utf8"));
  const templatePath = path.resolve("squads/design/templates/premium-lp-template.html");
  const tokensPath = path.resolve("squads/design/templates/premium-lp-tokens.yaml");

  const template = fs.readFileSync(templatePath, "utf8");
  const tokensYaml = yaml.load(fs.readFileSync(tokensPath, "utf8"));
  const ctx = prepareContext(payload, tokensYaml);
  const rendered = renderTemplate(template, ctx);

  const outDir = path.resolve(`outputs/premium-design/${payload.config.template}`);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), rendered, "utf8");
  fs.writeFileSync(path.join(outDir, "content-payload.yaml"), fs.readFileSync(payloadPath, "utf8"), "utf8");

  console.log(`Generated: ${path.join(outDir, "index.html")}`);
}

main();
