$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$script = Join-Path $PSScriptRoot "rank_reels_profile.py"

$jobs = @(
    @{
        Name = "amanda-lourenco"
        Input = Join-Path $root "amanda-lourenco\amandallourenco-reels-transcripts.json"
        Output = Join-Path $root "amanda-lourenco\ranking-top-reels.md"
        Top = 20
    },
    @{
        Name = "camila-zen"
        Input = Join-Path $root "camila-zen\camilazenoficial-reels-transcripts.json"
        Output = Join-Path $root "camila-zen\ranking-top-reels.md"
        Top = 25
    }
)

foreach ($job in $jobs) {
    Write-Output ("RANKING: " + $job.Name)
    python $script $job.Input $job.Output $job.Top
}

Write-Output "DONE: rankings atualizados."
