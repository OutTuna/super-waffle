param([int]$Port = 5173)

$ErrorActionPreference = 'Stop'
Push-Location $PSScriptRoot
try {
    if (-not (Test-Path -LiteralPath 'node_modules/vite/bin/vite.js')) {
        throw 'Dependencies are missing. Run npm ci first.'
    }
    & node node_modules/vite/bin/vite.js --host 127.0.0.1 --port $Port --strictPort
    if ($LASTEXITCODE -ne 0) { throw "Vite exited with code $LASTEXITCODE" }
} finally {
    Pop-Location
}
