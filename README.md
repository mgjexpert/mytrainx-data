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

## Initial structure

```
schemas/
  content-item.schema.json
  source-collection.schema.json
  content-rights.schema.json
  exercise.schema.json
  recipe.schema.json
manifests/
  sources/
  wkt/
  library/
  recipes/
ingestion/
  README.md
  pipelines/
taxonomy/
  README.md
  library-taxonomy.v1.json
docs/
  DATA-GOVERNANCE.md
```

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
