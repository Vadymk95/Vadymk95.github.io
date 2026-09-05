# vadym-site

One-page personal site. Static HTML and CSS, no build step, no JavaScript, no trackers.

## Run locally

```sh
python3 -m http.server 8765
```

Open http://localhost:8765.

## Deploy (pick one)

- Firebase Hosting: `firebase login`, `firebase use --add` (creates `.firebaserc`, gitignored is not needed), `firebase deploy --only hosting`. `firebase.json` is already here.
- Cloudflare Pages or GitHub Pages: connect the repo, output directory `/`.

Domain: register on a personal email address, keep WHOIS privacy on.

## Before publishing (TODO)

- [x] Contact address set in `index.html`.
- [ ] Decide whether to add a LinkedIn link next to GitHub.
- [ ] Optional: years of experience in the lede (not stated anywhere in the source material, so left out).
- [ ] Re-read the copy for anything that names or identifies an employer. The page deliberately names none and makes no availability claims.

## Design plan

Subject: a hands-on frontend lead whose product is judgement and verification, not typing. Audience: founders and engineering leads at small product companies across English-speaking Europe and beyond (UK, Netherlands, Nordics, Germany, US). Job of the page: confirm in ten seconds that this is a real, careful senior, and give a contact.

Treatment: a calm profile page. One aesthetic risk, the typography; everything else quiet.

- Palette (light): ground `#eef0f2`, surface `#f7f8f9`, ink `#161b22`, muted `#5b6570`, hairline `#d3d8dc`, accent brass `#7a5d1b`.
- Palette (dark): ground `#0f1418`, surface `#151b21`, ink `#e6e9ec`, muted `#9aa4ad`, hairline `#26303a`, accent brass `#d4a83a`.
- Contrast, measured (WCAG ratio): ink/ground 15.1 and 15.2; muted/ground 5.19 and 7.31; accent/ground 5.39 and 8.35; button text on brass 5.39 and 8.35. Everything passes AA for normal text.
- Type: Newsreader (display, weight 500, optical size 72 for the name), IBM Plex Sans (body), IBM Plex Mono (eyebrow, dates, facts labels). Google Fonts with `display=swap` and real fallback stacks.
- Layout: one column, 66ch measure, fluid type via `clamp()`. From 64rem a left rail holds the section labels; below that they stack. Hairlines separate sections; no cards, no shadows, one brass accent (the rule under the name, links, the button).
- Themes: tokens on `:root`, dark redefines tokens under `prefers-color-scheme` guarded by `:not([data-theme="light"])`, and again under `[data-theme="dark"]`.
- Browser support: Baseline widely available; `text-wrap: balance` degrades harmlessly.

## Content sources

Vault: `self/interview-prep/intros/*`, `self/achievements-2026.md` (anonymised), `personal/_index.md` for side projects.
