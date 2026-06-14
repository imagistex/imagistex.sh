# imagistex.sh

emma x lirette's personal site — a home shaped like her.
Handmade, static, no framework, no CMS.

## Status

**v1 — the "floor plan":** a legible, enchanted single page that collects the
work. Reads as personality to the scene *and* scans in twenty seconds for an
employer. Enchantment lives in the skin and the voice; legibility in the bones.

## v2 north star — the mirror-chamber

An explorable, zoomable canvas (kin to sus.cat's spatial map, but in Emma's
register): the self as a **chamber of mirrors** rather than a cozy desk —
aesthetically continuous with *psychomanteum*. Built as an "enter the mirror"
explore-mode layered *over* the legible v1, so the employer-legible front door
is never sacrificed for the delight. Two doors, one home.

## Run locally

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just open `index.html` in a browser.

## Deploy

Static host (Cloudflare Pages / Netlify / Spaceship static). Connect this repo —
build command: none, output dir: repo root. Point `imagistex.sh` DNS at the host.
`emma.bio` and `imagistex.bio` → 301 redirect to `imagistex.sh`.

## Notes

- **Public repo.** No private content, ever — cerebro stays its own separate vault.
- Every word in `index.html` is placeholder voice. Emma rewrites freely.
