#!/usr/bin/env bash
# Run from anywhere: auth-gmail  OR  ./scripts/auth-gmail.sh
exec "$(dirname "$(readlink -f "$0")")/run-google-workspace-mcp.sh" auth "$@"
