@echo off
setlocal

set SCRIPT=docs\research\scripts\rank_reels_profile.py

echo RANKING: amanda-lourenco
python %SCRIPT% docs\research\amanda-lourenco\amandallourenco-reels-transcripts.json docs\research\amanda-lourenco\ranking-top-reels.md 20
if errorlevel 1 exit /b 1

echo RANKING: camila-zen
python %SCRIPT% docs\research\camila-zen\camilazenoficial-reels-transcripts.json docs\research\camila-zen\ranking-top-reels.md 25
if errorlevel 1 exit /b 1

echo DONE: rankings atualizados.
endlocal
