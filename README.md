# Avara legal site (GitHub Pages)

This `docs/` folder is published as the public legal site for Avara at:

- **https://avara.app/privacy** → `privacy.md`
- **https://avara.app/terms** → `terms.md`

## How it's wired up

1. The site is served by **GitHub Pages** from this `docs/` folder on the `main` branch.
2. `_config.yml` enables Jekyll with the `minima` theme and clean permalinks (`/privacy`, `/terms`) so URLs do not have a `.html` suffix.
3. `CNAME` binds the Pages site to the custom domain `avara.app`.

Both `privacy.md` and `terms.md` carry Jekyll front-matter that pins their permalinks:

```yaml
---
layout: default
title: Privacy Policy
permalink: /privacy
---
```

## One-time setup (only needed if Pages isn't already enabled)

In the GitHub repository hosting this folder:

1. **Settings → Pages**
   - Source: `Deploy from a branch`
   - Branch: `main` / folder: `/docs`
2. **Settings → Pages → Custom domain**: enter `avara.app` and save.
3. Wait for the DNS check to pass, then tick **Enforce HTTPS**.
4. In your DNS provider, point `avara.app` (apex) at GitHub Pages:
   - `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - or `ALIAS`/`ANAME` to `<user-or-org>.github.io`
   - and a `CNAME` for `www` to `<user-or-org>.github.io` (optional)

## Updating the documents

Edit `privacy.md` or `terms.md` directly, bump the **Last updated** date at the top, commit to `main`. GitHub Pages will rebuild within ~1 minute.

## Verifying after deploy

```
curl -I https://avara.app/privacy
curl -I https://avara.app/terms
```

Both should return `HTTP/2 200` and `content-type: text/html`.

The in-app links already point at these URLs:

- `FlowShift/UI/Paywall/PaywallView.swift` (subscription disclosure footer)
- `FlowShift/UI/Screens/Settings/SettingsView.swift` (Privacy Policy row)
