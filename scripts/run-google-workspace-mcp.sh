#!/usr/bin/env bash
# Launch @dguido/google-workspace-mcp using corvidae-studio personal Google OAuth.

set -euo pipefail

CORVIDAE_ENV="${CORVIDAE_ENV:-/home/jaybird/jayprograms/corvidae-studio/.env}"

if [[ -f "$CORVIDAE_ENV" ]]; then
  # shellcheck disable=SC1090
  source <(grep -E '^GOOGLE_PERSONAL_(CLIENT_ID|CLIENT_SECRET)=' "$CORVIDAE_ENV" | sed 's/\r$//')
fi

export GOOGLE_CLIENT_ID="${GOOGLE_PERSONAL_CLIENT_ID:?Set GOOGLE_PERSONAL_CLIENT_ID in corvidae-studio/.env}"
export GOOGLE_CLIENT_SECRET="${GOOGLE_PERSONAL_CLIENT_SECRET:?Set GOOGLE_PERSONAL_CLIENT_SECRET in corvidae-studio/.env}"
export GOOGLE_WORKSPACE_SERVICES="${GOOGLE_WORKSPACE_SERVICES:-drive,gmail}"
export GOOGLE_WORKSPACE_MCP_TOKEN_PATH="${GOOGLE_WORKSPACE_MCP_TOKEN_PATH:-${HOME}/.config/google-workspace-mcp/tokens.json}"
export GOOGLE_WORKSPACE_MCP_PROFILE="${GOOGLE_WORKSPACE_MCP_PROFILE:-portfolio-discovery}"

GWS_BIN="${GWS_BIN:-$(which google-workspace-mcp 2>/dev/null || echo "npx -y @dguido/google-workspace-mcp@3.4.4")}"

if [[ "${1:-}" == "auth" ]]; then
  exec $GWS_BIN auth
fi

exec $GWS_BIN
