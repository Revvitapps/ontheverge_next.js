# On the Verge Enrichment

Design preview and future home of the On the Verge Enrichment website (otvenrichment.com), built by Revvit.

## What's here now

| Route | What it is |
| --- | --- |
| `/` | Chooser page with live previews of the three directions |
| `/regal` | Style option 1: navy and gold, elegant |
| `/joyful` | Style option 2: warm, vibrant, celebratory |
| `/horizon` | Style option 3: light, airy, modern |
| `/brand` | Brand guide: logo rules, colors, type, imagery, voice, tokens |

The four design comps are authored in `designs-src/` and wrapped into full pages in `public/designs/`
by `scripts/build-designs.mjs`, which runs before every `dev` and `build`. `COPY-DECK.md` holds the
placeholder copy and the list of what we still need from the client.

## Next step

Once she picks a direction, rebuild that comp as real React components in `app/` (sections for hero,
about, programs, events, testimonials, connect, give), wire the contact form and online giving,
retire the other comps, and point otvenrichment.com at the Vercel project.

## Develop

```bash
npm install
npm run dev
```
