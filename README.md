# MyTrainX Data

Structured content, ingestion manifests and knowledge-source tooling for the MyTrainX ecosystem.

## Purpose

This repository is **not** the application backend and is **not** the canonical database schema repository.

Canonical responsibilities:

- `mytrainx-platform` — application, Supabase migrations, product/domain contracts, Internal Agent API.
- `mytrainx-data` — content manifests, source inventories, import tooling, recipe/content datasets, ingestion schemas and knowledge-index configuration.
- Atendimento.Center — agent runtime, conversations, operational memory, model/tool orchestration and channels.

## Allowed content

- content source manifests;
- Google Drive inventories;
- ebook/PDF metadata;
- recipe datasets;
- video transcript manifests;
- structured tags/taxonomy;
- ingestion scripts;
- export/import tooling;
- test fixtures without secrets/private user data.

## Do not store

- Supabase secret/service keys;
- API keys;
- user/private customer data;
- payment data;
- raw copyrighted content unless the project has the necessary rights and storage policy permits it;
- generated embeddings as the only canonical copy of source knowledge.

## Current structure

```
content/
  owned/
    training/
    nutrition/
    programs/

schemas/
  content-item.schema.json
  source-collection.schema.json
  source-asset.schema.json
  content-rights.schema.json
  collection.schema.json
  learning-path.schema.json
  digital-product.schema.json
  media-asset.schema.json
  knowledge-document.schema.json
  exercise.schema.json
  food.schema.json
  recipe.schema.json

manifests/
  sources/
  inventory/
  library/
  products/
  exercises/
  foods/
  recipes/
  knowledge/
  wkt/

ingestion/
  README.md
  pipelines/
    exercises/
    drive/
    pdf/
    video/
    nutrition/
  validators/

taxonomy/
  README.md
  library-taxonomy.v1.json
  library-taxonomy.v2.json

docs/
  DATA-GOVERNANCE.md
  LIBRARY-OPERATING-MODEL-V2.md
  CONTENT-EDITORIAL-STANDARD-2026.md
  CONTENT-DESIGN-WATERMARK-SYSTEM.md
  EVIDENCE-REVIEW-POLICY-2026.md
  CONTENT-GAP-MAP-2026-09-25.md
  CONTENT-TEMPLATES.md
  EXERCISE-LOCALIZATION-REVIEW-PIPELINE.md
  PRODUCTION-TEAM-AND-AI-MATRIX.md
```

## Canonical V2 direction

Start with:
1. `docs/LIBRARY-OPERATING-MODEL-V2.md`
2. `docs/CONTENT-EDITORIAL-STANDARD-2026.md`
3. `docs/CONTENT-DESIGN-WATERMARK-SYSTEM.md`
4. `manifests/library/library-master-plan.v1.json`
5. `taxonomy/library-taxonomy.v2.json`

The repository now includes original MyTrainX manuscripts and program/recipe seeds. Content under `content/owned/` is still subject to its declared editorial/subject-matter review state before publication.

## Content model

Every source should eventually map to a MyTrainX `content_item` with:

- stable ID/slug;
- title/type/language;
- source provider/external ID;
- access policy;
- AI index policy;
- tags/topics;
- associated products;
- publication/version status.

Storage location is not the information architecture.

A Google Drive file may remain on Drive while MyTrainX owns its metadata, entitlement rules and retrieval policy.
