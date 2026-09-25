# MyTrainX Content Design & Watermark System

**Version:** 1.0  
**Date:** 2026-09-25  
**Visual family:** BLACK PERFORMANCE SYSTEM + MYTRAINX ORANGE

## Goal

All owned or rights-cleared MyTrainX editorial assets must be recognizable even outside the platform while remaining premium, legible and non-intrusive.

A watermark is a provenance/brand device, not a substitute for copyright control.

## Critical rights rule

Never add a MyTrainX watermark to a third-party/reference-only asset in a way that implies MyTrainX authorship or ownership.

Watermarks apply only to:
- MyTrainX-owned original output;
- commissioned output assigned/licensed to MyTrainX;
- verified PLR transformed into a permitted MyTrainX edition;
- compatible public-domain/open assets after the provenance rules for that source are satisfied.

## Core watermark lockup

Preferred text lockup:

`MYTRAINX · OFFICIAL EDITION · MYTRAINX.FIT`

Compact:

`MYTRAINX.FIT`

Optional content ID:

`MYTRAINX · MTX-CONTENT-ID`

Do not place personal email addresses in watermarks.

## PDF / ebook

### Persistent footer
- location: bottom outer corner or centered footer;
- size: 7–9 pt equivalent;
- low visual emphasis;
- include `MYTRAINX.FIT` and content/version ID.

### Page watermark
Use selectively:
- 4–7% visual opacity for large center-page wordmark;
- 12–20° diagonal only for member-only review copies;
- production consumer ebooks should prefer a clean footer rather than a large diagonal stamp.

### Personalized anti-leak marker
For purchased/member downloads, optionally render:
- short opaque entitlement token;
- order/content license token;
- timestamp.

Never expose secret IDs, payment references or sensitive personal data.

## Video

### Brand bug
- preferred: upper-right;
- safe-zone inset: ~3% of frame width/height;
- target width: 6–9% of frame;
- avoid covering exercise joints, timer UI or captions.

### Dynamic anti-leak marker
Optional for premium streaming:
- short anonymous viewer/session token;
- low-opacity;
- shifts among pre-approved safe zones;
- never use full email/phone.

### Intro/outro
Keep branding short. The workout should start quickly.
Use title card metadata for:
- program;
- workout;
- level;
- duration;
- equipment.

## Images / exercise illustrations

- small MyTrainX mark in a safe corner;
- source/provenance retained in metadata;
- instructional overlays use high contrast and semantic labels;
- never watermark across anatomical detail that the user needs to see.

## Recipe cards

Mandatory visual hierarchy:
1. recipe name;
2. hero image;
3. time / servings / difficulty;
4. ingredients;
5. method;
6. estimated nutrition;
7. substitutions;
8. allergens/notes;
9. MyTrainX mark + content ID.

## Ebook visual language

### Cover
- near-black / graphite base;
- MyTrainX orange as controlled signal color;
- one strong photographic or graphic idea;
- short title;
- one-line promise without guaranteed outcome;
- series badge when applicable.

### Interior
- generous rhythm;
- strong condensed display typography for section openers;
- neutral body typography;
- orange used for navigation, callouts and progress markers;
- green reserved for genuine status/success, not decoration;
- charts prioritize clarity over spectacle.

## Accessibility

- never rely on orange alone to convey meaning;
- provide sufficient text/background contrast;
- captions/transcripts for video;
- alt text for instructional images;
- diagrams must have accompanying written instructions.

## Asset naming

`mtx-{domain}-{slug}-{locale}-v{major}.{minor}-{asset}.{ext}`

Examples:
- `mtx-training-squat-ptbr-v1.0-cover.webp`
- `mtx-nutrition-fundamentals-ptbr-v1.0-ebook.pdf`
- `mtx-recipe-frango-arroz-legumes-ptbr-v1.0-card.webp`

## Export metadata

Every exported asset should retain:
- MyTrainX content ID;
- title;
- version;
- copyright/rights basis;
- publication date;
- canonical URL when public;
- source attribution when required;
- evidence review date where relevant.
