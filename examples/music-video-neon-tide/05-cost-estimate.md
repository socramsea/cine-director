# Cost estimate — "Neon Tide" (fictional)

The quantities are exact, derived from `02-decupage.md`. The unit prices are
**named variables, not numbers**, per the PENDING rule.

That is the honest form of this document. Generative-video pricing changes
without notice, so a figure committed here would be authoritative-looking and
wrong by the time you read it. Substitute today's published prices into the
formulas and the estimate is correct for today.

## Inputs, derived from the decupage

| Quantity | Value | Derivation |
|---|---|---|
| Shots | 12 | shot table |
| Video seconds | 92.000 | sum of all shot durations |
| Lipsync seconds | 60.000 | sum of durations where Lipsync = yes |
| Reference images | 12 | one per shot, per `references/pipeline.md` step 2 |

## Unit prices — to be filled in on the day you estimate

| Variable | What it is | Value |
|---|---|---|
| `P_img` | price per generated reference image | PENDING [check your image provider today] |
| `P_vid` | price per second of image-to-video | PENDING [check your video provider today] |
| `P_lip` | price per second of lipsync | PENDING [check your lipsync provider today] |

Record the source and the date next to each value when you fill it in. A price
without a date is a price you cannot audit later.

## Estimate

| Item | Qty | Unit | Unit price (source + date) | Total |
|---|---|---|---|---|
| Reference images | 12 | image | `P_img` — PENDING | 12 × `P_img` |
| Video generation | 92.000 | s | `P_vid` — PENDING | 92.000 × `P_vid` |
| Lipsync | 60.000 | s | `P_lip` — PENDING | 60.000 × `P_lip` |
| **Subtotal — one clean pass** | | | | 12·`P_img` + 92·`P_vid` + 60·`P_lip` |
| Regeneration margin | ×1.5 | | covers the pilot's second generation and rejected takes | |
| **Budget** | | | | **18·`P_img` + 138·`P_vid` + 90·`P_lip`** |

Fill in three numbers and the bottom row is your budget.

## What actually drives this number

**The margin is the largest line.** The ×1.5 is not padding — it is the pilot
generated twice to settle the mouth-state question, plus the takes that come
back with a bent horizon or a drifted face. Budgeting for one clean pass is
budgeting for an outcome that has never happened.

**Four shots carry no lipsync, and that was a directing decision.** Shots 01,
04, 07 and 11 are 32.000 s of the running time with no vocal on camera. Had they
been staged as performance shots, the lipsync line would read 92.000 s instead
of 60.000 s — a 53% increase on that line, decided in pre-production, at no cost,
before anything was generated.

**Whether that trade was worth it depends on a number you have not filled in
yet.** If `P_lip` is greater than `P_vid`, the lipsync/no-lipsync split is the
strongest lever in this budget and worth revisiting shot by shot. If it is much
smaller, the lever is total running time instead. The decupage is cheap to
change right now and expensive to change after generation, so this is the moment
to look.

**Shot 11 is a contingent cost.** If the 10.000 s crane rise fails at full
length and splits into two takes, the second take adds one more reference image
and a regeneration. It does not change the total video seconds — the running
time is fixed at 92.000 s either way.

## Before spending anything

1. Fill in `P_img`, `P_vid` and `P_lip` with today's published prices, each with
   its source and date.
2. Compute the budget row and approve it explicitly.
3. Generate **shot 03 only**, end to end, both mouth states.
4. Approve the pilot against the acceptance criteria in
   `references/shots/close-up-lipsync.md`.
5. Only then generate the remaining 11 shots.

Step 5 before step 4 is how a systematic error becomes a systematic error
multiplied by twelve.
