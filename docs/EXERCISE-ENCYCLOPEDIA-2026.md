# MyTrainX Exercise Encyclopedia — 2026 Production Spec

## Objective
Create the canonical exercise layer used by the Library, workout builder, programs and Coach X.

## Seed strategy
Use compatible public-domain/open exercise data as a seed, then normalize, localize, review and enrich every record before publication.

Target: hundreds of canonical exercises, not a small hand-curated demo set.

## Required fields
- id / slug
- canonical_name
- name_pt_br
- aliases
- category
- movement_pattern
- modality
- difficulty
- equipment
- primary_muscles
- secondary_muscles
- unilateral/bilateral
- setup
- execution_steps
- breathing
- coaching_cues
- common_mistakes
- regressions
- progressions
- alternatives
- safety_notes
- programming_examples
- source_ids
- review_status
- media assets
- watermark status

## Core movement families
- squat
- hinge
- lunge
- horizontal push
- vertical push
- horizontal pull
- vertical pull
- carry
- rotation
- anti-rotation
- anti-extension
- anti-lateral-flexion
- locomotion
- jump/landing
- conditioning
- mobility
- isolation
- calisthenics skill

## Library views
- by muscle
- by equipment
- by movement
- by goal
- by difficulty
- home / gym
- bodyweight
- calisthenics
- mobility/recovery

## Publication workflow
import seed -> deduplicate -> PT-BR localization -> taxonomy mapping -> exercise review -> safety review -> MyTrainX rewrite -> media pairing -> publish -> AI index.

## Media roadmap
Phase 1: publish text-first records when rights/review allow.
Phase 2: add consistent illustrations or owned demonstration stills.
Phase 3: create MyTrainX-owned short demo clips for priority exercises.
Phase 4: full branded exercise media library.

All owned/eligible imagery follows MyTrainX watermark standard.

## Priority first 100
The first editorial pass should prioritize the movements most useful across MyTrainX Start, WKT, Home 30, Core 21, HIIT and strength programming:
- squat variations
- split squat/lunge variations
- hip hinges/deadlifts
- bridges/hip thrusts
- push-ups and presses
- rows
- pull-up/chin-up progressions
- overhead presses
- pulldowns
- carries
- planks
- dead bug/bird dog
- anti-rotation work
- calf work
- curls/extensions
- lateral/rear-delt work
- step-ups
- jumps/landing drills
- low-impact conditioning
- burpee regressions/progressions
- mountain climber regressions/progressions
- mobility staples
- handstand foundations
- front lever foundations
- planche foundations

Advanced skills should be gated by prerequisites and not presented as generic beginner exercises.
