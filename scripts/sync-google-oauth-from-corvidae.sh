#!/usr/bin/env bash
# Build ~/.config/google-workspace-mcp/credentials.json from corvidae-studio .env
# Reuses GOOGLE_PERSONAL_* OAuth app (julia.hasty@gmail.com)

set -euo pipefail

CORVIDAE_ENV="${CORVIDAE_ENV:-/home/jaybird/jayprograms/corvidae-studio/.env}"
OUT_DIR="${HOME}/.config/google-workspace-mcp"
OUT_FILE="${OUT_DIR}/credentials.json"

if [[ ! -f "$CORVIDAE_ENV" ]]; then
  echo "Missing corvidae-studio .env: $CORVIDAE_ENV" >&2
  exit 1
fi

# shellcheck disable=SC1090
source <(grep -E '^GOOGLE_PERSONAL_(CLIENT_ID|CLIENT_SECRET)=' "$CORVIDAE_ENV" | sed 's/\r$//')

if [[ -z "${GOOGLE_PERSONAL_CLIENT_ID:-}" || -z "${GOOGLE_PERSONAL_CLIENT_SECRET:-}" ]]; then
  echo "GOOGLE_PERSONAL_CLIENT_ID/SECRET not set in $CORVIDAE_ENV" >&2
  exit 1
fi

mkdir -p "$OUT_DIR"
export GOOGLE_PERSONAL_CLIENT_ID GOOGLE_PERSONAL_CLIENT_SECRET

# Desktop-app shape for MCP OAuth loopback flow
python3 - <<'PY'
import json, os
out = {
  "installed": {
    "client_id": os.environ["GOOGLE_PERSONAL_CLIENT_ID"],
    "client_secret": os.environ["GOOGLE_PERSONAL_CLIENT_SECRET"],
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "redirect_uris": ["http://127.0.0.1", "http://localhost"],
  }
}
path = os.path.expanduser("~/.config/google-workspace-mcp/credentials.json")
with open(path, "w") as f:
    json.dump(out, f, indent=2)
print("Wrote", path)
PY

echo "Next: enable Gmail API + Drive API on the same Google Cloud project, then run:"
echo "  portfolio/scripts/run-google-workspace-mcp.sh auth"
