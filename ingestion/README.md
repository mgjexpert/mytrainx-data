# Ingestion

The ingestion layer converts owned/authorized source material into structured MyTrainX content metadata and searchable knowledge.

## Pipeline

```
source inventory
→ validate rights/access
→ register content item
→ extract/transcribe
→ normalize metadata
→ chunk/index
→ publish retrieval status
```

## Separation of concerns

Media delivery is not the same as AI retrieval.

Example:
- full video remains on Google Drive;
- MyTrainX stores content metadata + access policy;
- transcript is generated separately;
- only approved transcript chunks become retrievable;
- entitlement is checked before retrieval.

## Initial priorities

1. WKT catalogue and supporting material
2. ebooks/manuals already owned by the project
3. recipe collection
4. educational videos
5. future course material

## Safety

Never ingest private user records into the knowledge index.

Never assume content is licensed just because a Drive link exists.
