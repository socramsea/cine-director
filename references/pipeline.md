# Production pipeline — generative video with lipsync

Flow validated in real production (music video, 18-shot decupage).
`PENDING [source]` markers indicate values the maintainer must fill in with
production data — never estimated by the agent.

## Overview

```
[1] Pre-production (dry-run)         cost: 0
    music/idea → decupage → character bible → prompts → audio plan
                    ↓
[2] Reference image per shot         cost: low
    canonical image of the character/scene, one per shot
                    ↓
[3] Image-to-video                   cost: per generated second
    validated engine: Grok Imagine Video (version in use: 1.5)
                    ↓
[4] Audio cuts (ffmpeg)              cost: 0, local
    one audio segment per shot with vocals, timestamps from the decupage
                    ↓
[5] Per-shot lipsync                 cost: per processed second
    validated engine: Sync Lipsync v2 (via fal.ai)
                    ↓
[6] Final edit (ffmpeg/NLE)          cost: 0, local
```

## Step 1 — Pre-production (the main product)

See SKILL.md (dry-run mode) and `../template/decupage-template.md`.
Golden rule: the decupage locks BEFORE a single frame is generated.
Changing a shot after it has been generated means paying for it again.

## Step 2 — Reference image

- Every scene starts from a canonical image derived from the character bible
  (`character-bible.md`). Never generate video from a pure text prompt when
  there is a recurring character: consistency between shots comes from the
  image, not from the text.
- Acceptance criteria for the image before animating it: the character's
  identity checked against the bible item by item (face, glasses, wardrobe,
  light). A rejected image does not move forward — regenerating is cheaper than
  animating the wrong thing.

## Step 3 — Image-to-video

- Duration per take: PENDING [fill in: maximum reliable duration observed in
  production before degradation]
- Prompt structure that worked: see the cards in `shots/`
- Known failure: prompts with multiple simultaneous actions degrade character
  fidelity. One main action per shot.

## Step 4 — Audio cuts (ffmpeg)

One audio file per shot with lipsync, cut from the master:

```bash
# validated pattern — cut without re-encoding when possible
ffmpeg -i master.wav -ss <start> -to <end> -c copy shot_NN.wav
# if the cut needs frame accuracy (-c copy cuts at a keyframe):
ffmpeg -i master.wav -ss <start> -to <end> shot_NN.wav
```

- Timestamps come from the "audio" column of the decupage — the decupage is the
  single source of truth for time.
- Safety margin on the cuts: PENDING [fill in: padding in ms used in production
  before and after the vocal]

## Step 5 — Lipsync

- Input: the shot's video (step 3) + the audio segment (step 4)
- Validated engine: Sync Lipsync v2 via fal.ai
- Production parameters: PENDING [fill in: validated config]
- Known failures: PENDING [fill in: observed failures — face angles, occlusion,
  framings that are too wide, etc.]
- Cost: check the current price at fal.ai/models before estimating. Never use a
  memorised price — it changes without notice.

## Step 6 — Edit

ffmpeg concat in decupage order; master audio over the video timeline (the
lipsync audio served for synchronisation, the final master guarantees
continuous quality):

```bash
ffmpeg -f concat -safe 0 -i list.txt -i master.wav \
  -map 0:v -map 1:a -c:v copy -shortest final.mp4
```

## Non-negotiable order of execution

1. Full dry-run approved
2. ONE pilot shot generated end to end (steps 2→5)
3. Pilot approved by the user → batch production
4. Never generate the batch without a pilot: a systematic error in a batch
   costs you the error × N
