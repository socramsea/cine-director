# Cost estimate — "Vila Mar 402" (fictional)

Quantities exact, derived from `02-decupage.md`. Unit prices are named
variables, per the PENDING rule.

## Inputs, derived from the decupage

| Quantity | Value | Derivation |
|---|---|---|
| Shots | 6 | shot table |
| Video seconds | 30.000 | sum of all shot durations |
| Lipsync seconds | 0.000 | no character in the project |
| Reference images to generate | 0 | the agent's own listing photographs are used |

## Unit prices — to be filled in on the day you estimate

| Variable | What it is | Value |
|---|---|---|
| `P_vid` | price per second of image-to-video | PENDING [check your video provider today] |

One variable. This is the simplest budget the skill produces, and the reason is
structural rather than lucky: no character means no generated reference images
and no lipsync pass, which removes two of the three cost lines a music video
carries.

## Estimate

| Item | Qty | Unit | Unit price (source + date) | Total |
|---|---|---|---|---|
| Reference images | 6 | image | supplied by the agent, not generated | 0 |
| Video generation | 30.000 | s | `P_vid` — PENDING | 30.000 × `P_vid` |
| Lipsync | 0.000 | s | not applicable | 0 |
| **Subtotal — one clean pass** | | | | 30.000 × `P_vid` |
| Regeneration margin | ×1.5 | | interiors reject more often than exteriors | |
| **Budget** | | | | **45.000 × `P_vid`** |

Fill in one number and the bottom row is your budget.

## What actually drives this number

**Format was the biggest decision, and it was free.** Locking 9:16 before the
decupage meant one deliverable. Generating both 9:16 and 16:9 would have made
the budget 90.000 × `P_vid` — the same shots, twice — for a second format nobody
in the brief asked for. That decision cost nothing at the time it was made and
would have cost 100% of the budget if deferred.

**The margin is doing real work here.** The ×1.5 is not a formality: this
package contains a shot with a known failure mode (the bathroom mirror) and two
shots on tiled floors. If the mirror shot falls back to a static hold, its
generation cost drops to zero and the margin absorbs the attempts that got it
there.

**Shorter takes are cheaper than one long one, at identical running time.**
Six 5.000 s takes and one 30.000 s sequence shot both bill 30.000 s. They do not
carry the same risk: a 30.000 s take that bends at second 22 is 30.000 s of
regeneration, while a 5.000 s take that fails costs 5.000 s. The decision to cut
rather than glide is a risk decision that shows up in the margin, not in the
subtotal.

## Before spending anything

1. Fill in `P_vid` with today's published price, with its source and date.
2. Compute the budget row and approve it explicitly.
3. Generate **shot 01 only** — the living room, the widest interior.
4. Compare it side by side against `photos/01-living.jpg`. Geometry stable,
   furniture unchanged, nothing added.
5. Generate shot 05 next, to settle the interior/exterior light question.
6. Only then generate the remaining four shots.

Step 4 is not a formality. It is the step where you find out whether the video
still shows the apartment you are selling.
