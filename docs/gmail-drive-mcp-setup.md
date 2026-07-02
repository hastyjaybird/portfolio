and t# Gmail + Google Drive MCP (portfolio)

Uses **corvidae-studio** personal Google OAuth (`GOOGLE_PERSONAL_*` in `corvidae-studio/.env`) — same GCP project as `julia.hasty@gmail.com` calendar OAuth.

## Installed

- Package: `@dguido/google-workspace-mcp@3.4.4` (global via npm)
- Cursor config: [`.cursor/mcp.json`](../.cursor/mcp.json) (project) and `~/.cursor/mcp.json` (global)
- Launcher: [`scripts/run-google-workspace-mcp.sh`](../scripts/run-google-workspace-mcp.sh)

## One-time setup

### 1. Google Cloud Console (same project as corvidae personal OAuth)

On the project that owns `GOOGLE_PERSONAL_CLIENT_ID`, enable:

- [Gmail API](https://console.cloud.google.com/apis/library/gmail.googleapis.com)
- [Google Drive API](https://console.cloud.google.com/apis/library/drive.googleapis.com)

If the OAuth client is **Web application** (corvidae calendar-api), either:

- Add authorized redirect URI: `http://127.0.0.1` and `http://localhost`, **or**
- Create a second OAuth client (Desktop app) in the same project and put its ID/secret in `corvidae-studio/.env` as `GOOGLE_PERSONAL_*`

### 2. Authenticate MCP (browser)

From the **portfolio repo root** (`~/jayprograms/portfolio`):

```bash
./scripts/run-google-workspace-mcp.sh auth
# or
./bin/portfolio auth-gmail
```

Wrong (only works from parent directory): `portfolio/scripts/...` when you are already inside `portfolio/`.

Tokens save to `~/.config/google-workspace-mcp/tokens.json` (profile: `portfolio-discovery`).

Optional: sync a credentials file from corvidae `.env`:

```bash
portfolio/scripts/sync-google-oauth-from-corvidae.sh
```

### 3. Restart Cursor

Reload MCP servers (restart Cursor or MCP panel). The `google-workspace` server should appear.

### 4. Test

Ask the agent to search Gmail for `XPrize OR SkySource` or Drive for `Eklutna energy plan`.

## Discovery queries

See [discovery-search-queries.md](./discovery-search-queries.md).

## Security

- OAuth secrets stay in `corvidae-studio/.env` — not committed to portfolio repo
- Tokens in `~/.config/google-workspace-mcp/`
- Revoke at [Google Account permissions](https://myaccount.google.com/permissions) when done
