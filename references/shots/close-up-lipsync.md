---
name: close-up-lipsync
one-liner: frontal close-up for lip sync — the most critical shot, and the most expensive to get wrong
applies-to: any shot where the character sings or speaks to camera
status: validated in production (Grok Imagine → ffmpeg → Sync Lipsync v2 pipeline)
---

## Intent
This is the shot that sells the video: the viewer judges the realism of the
whole piece by the mouth. The entire pipeline exists so that this shot works.

## Prerequisites (in this order)
1. The shot's audio cut is ready and checked (timestamps from the decupage)
2. Base video generated with a frontal or 3/4 face, well lit
3. Only then, the lipsync pass

## Prompt structure (base video)
[FULL BIBLE] + "sings to camera with contained emotion, subtle head movement" +
"frontal close-up, lens PENDING [fill in if standardised], shallow depth of
field"

## Parameters
| Parameter | Value | Source |
|---|---|---|
| Maximum face angle | PENDING | test: frontal vs 3/4 vs profile |
| Lipsync segment duration | = the shot's duration in the decupage | the decupage is the single source of truth for time |
| Sync Lipsync v2 config | PENDING | config validated in production |

## Known failures
- Generating the base video with the mouth already moving (character "singing"
  in the video prompt) and applying lipsync on top: PENDING [confirm in
  production whether a neutral or singing mouth gives a better result on v2].
- Full beard: check on the pilot whether the lipsync engine handles the mouth
  region well with a beard — validate before the batch.
- An audio cut starting mid-syllable → the first viseme is wrong and clearly
  visible. Cut on a breath or a pause.

## Acceptance criteria
Frame-exact sync on the plosives (p, b, m); identity preserved (the lipsync
must not "swap the face"); clean transition on the shot's in and out frames.
