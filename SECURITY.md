# Security

## Credential rotation required

Plaintext passwords were previously stored in `.env`. **Rotate your Wix and LinkedIn passwords immediately** and store credentials only in a password manager — not in this repository.

## Repository rules

- Never commit `.env`
- Use `.env.example` for non-secret configuration templates
- Gmail MCP OAuth tokens are stored locally by Cursor; scope permissions narrowly
