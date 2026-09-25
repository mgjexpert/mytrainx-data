# Data Governance

## Canonical ownership

- Database schema/DDL: `mgjexpert/mytrainx-platform`
- Content manifests/import data: `mgjexpert/mytrainx-data`
- Runtime domain state: Supabase project `oitfnnsfgaxcxqvizorw`
- Agent conversations/operational memory: Atendimento.Center
- Raw media source: approved external storage such as Google Drive

## No secrets

Never commit:
- Supabase secret keys
- XPayments credentials
- OpenAI/provider keys
- private customer exports
- access tokens

## Access metadata

Every content item must state:
- product/access policy;
- AI retrieval policy;
- publication status.

## User data

This repository must not become a user-data warehouse.

User profile, progress, purchases, conversations and memory stay in their runtime systems.
