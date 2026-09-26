# Exercise Localization & Review Pipeline

## Objective

Transform the complete open exercise seed into a MyTrainX-quality exercise encyclopedia.

## Stages

1. Import upstream English canonical seed.
2. Normalize equipment and muscle vocabulary.
3. Assign movement pattern/body region.
4. Generate PT-BR candidate name and aliases.
5. Preserve English canonical alias.
6. Human/editorial language review.
7. Exercise-science review.
8. Add MyTrainX coaching cues.
9. Add common mistakes.
10. Add safety notes.
11. Build regressions/progressions/alternatives.
12. Attach owned visual media.
13. Mark publishable.

## Naming examples

- Barbell Back Squat -> Agachamento com Barra
- Romanian Deadlift -> Levantamento Terra Romeno
- Lat Pulldown -> Puxada na Polia Alta
- Dumbbell Bench Press -> Supino com Halteres
- Pull-Up -> Barra Fixa / Pull-up (alias)
- Push-Up -> Flexão de Braços

Prefer the name commonly understood by Brazilian gym users while keeping technical and English aliases searchable.

## Review rule

Imported instructions are source seed text, not automatically MyTrainX final copy.
The final PT-BR instructions should be independently rewritten for clarity and safety.

## Graph policy

Progressions/regressions are MyTrainX editorial knowledge. Do not infer them solely from exercise name similarity.

## Visual production

For each high-priority exercise:
- neutral start image;
- neutral end image;
- short loop/video;
- one primary coaching cue;
- one common-error visual where useful;
- consistent camera/framing for the exercise family;
- MyTrainX watermark according to the content design system.

Launch can precede complete video coverage, but every published exercise must have enough text to be safely understood.
