# Phase 2 — AMBER Review Lane

**Date:** 2026-09-26  
**Status:** ACTIVE

## Decision

The previous RED/quarantine editorial lane is retired as a dead-end workflow.

All former RED source collections move to **AMBER REVIEW**.

This changes the workflow, not the publication standard.

AMBER means:

- the source may be inventoried and studied;
- useful concepts may be reconstructed as original MyTrainX education when rights and evidence permit;
- outdated claims may be rewritten against current evidence;
- specialist/clinical review may be requested;
- a safer adjacent product may be created from the topic;
- the item must keep provenance and review history.

AMBER does **not** mean:

- direct republishing of restricted third-party material;
- automatic commercial rights;
- automatic Coach X retrieval;
- clinical validation;
- permission to diagnose, prescribe medication or make therapeutic claims;
- removal of the review gate.

## Technical state

For backward-compatible safety, former RED items remain:

- `status = quarantined`
- `ai_policy_default = none`
- rights unchanged, commonly `reference_only / restricted`

The editorial classification changes to:

- `relevance_status = amber_review`
- `metadata.risk_lane = amber`

This deliberately separates:

**workflow priority** from **runtime/publication permission**.

## Former RED → AMBER sources

- `mentes-ansiosas`
- `vida-longa`
- `hipopressivo-stc-2021`
- `barriga-negativa`
- `sem-gluten`
- `viver-sem-diabetes`
- `detox-7-dias`
- `respire-melhor`
- `emagrecimento-acelerado-2`

## Phase 2 transformation rule

Each source must result in one of four outcomes:

1. **RECONSTRUCT**
   - extract useful topic/structure;
   - rewrite from current evidence;
   - create original MyTrainX content;
   - retain private provenance.

2. **LICENSE**
   - verify a valid commercial/derivative license;
   - retain required evidence;
   - transform under the license terms.

3. **REFERENCE**
   - keep private/internal only;
   - use for gap discovery;
   - do not publish or index for ordinary Coach X retrieval.

4. **REJECT**
   - if the premise cannot be modernized safely or the source has no legitimate product value.

## Mandatory review areas

Specialist/clinical sign-off remains mandatory for:
- diabetes/disease management;
- respiratory disease;
- medication;
- hormones;
- therapeutic supplement claims;
- injury diagnosis/rehabilitation prescriptions;
- pregnancy-specific contraindications;
- eating-disorder treatment;
- treatment claims for anxiety or other mental-health conditions.

## 2026 modernization rules

Remove or challenge unsupported frames such as:
- detox as a physiological cleansing promise;
- “accelerate metabolism” as a generic guarantee;
- “melt/burn fat” promises;
- disease reversal/cure claims;
- moral food labels;
- universal dietary exclusions without indication;
- exact body-composition conclusions from consumer devices/photos.

Where the original topic is useful, prefer a new MyTrainX product with a safer framing.

Examples:

- “Detox 7 Dias” → **7-Day Reset: refeições simples, hidratação, sono e rotina**
- “Emagrecimento Acelerado” → **Weight Management Fundamentals**
- “Barriga Negativa” → **Core, Waist & Body Composition Without Noise**
- “Vida Longa” → **Healthy Longevity: movement, sleep, food and habits**
- “Respire Melhor” → private evidence/reference lane unless specialist-reviewed educational scope is clearly defined.

## Publication gate

No AMBER item becomes public or retrievable until:
1. rights decision is explicit;
2. claims are rewritten/checked;
3. required specialist review is approved;
4. MyTrainX editorial review is approved;
5. the new canonical content object has its own provenance and version.
