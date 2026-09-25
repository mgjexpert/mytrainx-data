# MyTrainX Library Operating Model V2

**Date:** 2026-09-25  
**Repository:** `mgjexpert/mytrainx-data`  
**Branch:** `feat/library-registry-v1`

## Purpose

This repository is the operational content factory for MyTrainX.

It converts heterogeneous sources (Drive folders, videos, PDFs, PLR packages, open datasets and future original productions) into validated manifests ready to be imported into the canonical MyTrainX domain.

It does not replace Supabase and it does not host application business logic.

## Golden rule

Every asset must be traceable:

```
source -> rights -> review -> normalization -> canonical entity -> publication/index decision
```

No orphan content. No anonymous copy. No rights assumptions.

## Repository target structure

```
docs/
  DATA-GOVERNANCE.md
  LIBRARY-OPERATING-MODEL-V2.md
  RIGHTS-PLAYBOOK.md
  REVIEW-PLAYBOOK.md

schemas/
  source-collection.schema.json
  source-asset.schema.json
  content-rights.schema.json
  content-item.schema.json
  collection.schema.json
  learning-path.schema.json
  digital-product.schema.json
  media-asset.schema.json
  exercise.schema.json
  recipe.schema.json
  food.schema.json
  knowledge-document.schema.json

manifests/
  sources/
    drive-courses/
    drive-plr/
    open-data/
    owned/
  inventory/
  rights/
  reviews/
  library/
  programs/
  exercises/
  foods/
  recipes/
  knowledge/
  products/

taxonomy/
  library-taxonomy.v2.json
  exercise-taxonomy.v1.json
  nutrition-taxonomy.v1.json
  safety-taxonomy.v1.json

ingestion/
  pipelines/
    drive/
    pdf/
    video/
    plr/
    exercises/
    nutrition/
  transforms/
  validators/
  reports/
```

## Source classes

- `owned`
- `commissioned`
- `drive_reference`
- `plr_candidate`
- `open_dataset`
- `official_evidence`
- `external_reference`

Source class does not equal rights status.

## Required asset metadata

Every source asset must eventually record:

- stable source ID;
- parent source collection;
- provider/external ID;
- title;
- path/original hierarchy;
- MIME/file type;
- file size;
- language;
- checksum when available;
- discovered date;
- source URL/locator;
- source class;
- rights status;
- review status;
- ingestion status;
- intended MyTrainX use;
- notes.

## Rights gate

Before transformation for publication, each asset/package must resolve:

- rights basis;
- commercial use;
- derivatives;
- redistribution;
- attribution;
- sublicense/resale rights where applicable;
- evidence artifact;
- reviewer;
- decision date.

Default:
- named third-party course -> reference only;
- PLR archive -> rights pending until package-level license verified;
- open dataset -> pending license compatibility check;
- MyTrainX-created -> owned after authorship/contract is recorded.

## Review gate

Review dimensions:
- editorial;
- exercise;
- nutrition;
- scientific;
- medical/clinical;
- safety;
- legal/rights.

Risk flags include:
- medications;
- hormones;
- disease treatment;
- injury treatment/diagnosis;
- detox;
- extreme dieting;
- potentially dangerous exercise progressions;
- outdated clinical claims.

## Ingestion waves

### Wave 1 — Complete Drive inventory
- recursively enumerate the two supplied root folders;
- preserve original folder hierarchy as provenance only;
- classify relevant/non-relevant;
- produce inventory statistics;
- flag duplicate files/packages.

### Wave 2 — PLR rights extraction
Priority archives:
- Musculação;
- Alimentação e Dieta;
- Culinária;
- Saúde e Bem Estar;
- Mindset.

For each nested product:
- identify title;
- locate license;
- extract rights summary;
- identify editable source files;
- identify sales collateral;
- classify commercial opportunity;
- do not publish automatically.

### Wave 3 — Reference course analysis
Map:
- WKT;
- Xtreme;
- Total HIIT;
- Summer ABS;
- Calisthenics;
- GRAVIDADE_ZERO;
- training technique;
- Smart Emagrecimento;
- Vida Funcional;
- Wellness.

Extract:
- program structure;
- curriculum;
- content formats;
- exercise concepts;
- recipe/nutrition concepts;
- progression logic;
- potential MyTrainX original product ideas.

Do not copy protected prose/media.

### Wave 4 — Open exercise seed
Validate license and ingest compatible exercise dataset(s).

Normalize:
- names;
- aliases;
- muscle mapping;
- equipment;
- movement pattern;
- difficulty;
- instructions;
- source provenance.

### Wave 5 — Nutrition seed
Use compatible canonical public/open nutrition data.

Normalize:
- foods;
- portions;
- nutrients;
- units;
- source identifiers.

### Wave 6 — Original MyTrainX production
Register all scripts/assets before publication so new owned content follows the same governance as imported material.

## Output quality tiers

- `raw` — source discovered;
- `inventory_complete`;
- `rights_resolved`;
- `reviewed`;
- `normalized`;
- `publish_ready`;
- `index_ready`.

A source can be normalized for internal analysis without becoming publish-ready.

## Commercial opportunity score

Use score only for content operations, not as a rights shortcut.

Suggested components:
- relevance;
- freshness;
- transformation effort;
- visual potential;
- product fit;
- evergreen value;
- differentiation;
- rights clarity;
- review risk.

An item with unknown rights cannot move to publication regardless of score.

## Knowledge output

Knowledge manifests must include:
- canonical content item;
- source version;
- language;
- extracted/transcribed text location;
- allowed retrieval audience;
- AI index policy;
- entitlement scope;
- rights status;
- review status;
- safety flags;
- provenance.

## Non-negotiables

- Never commit secrets.
- Never commit private customer data.
- Never copy entire protected third-party courses into the repository.
- Never infer PLR rights from neighboring files.
- Never strip provenance.
- Never mix reference-only sources with publishable sources in exports.
- Never promote medical/clinical material without the required review.
