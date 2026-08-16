# Brief — "Neon Tide" (fictional)

> Fictional project, published as a complete worked example. The artist, the
> track and the location do not exist.

## What was asked

> Use cine-director to plan a music video for this track. It's 1:32, electronic,
> one performer, shot at the coast at dusk. I want lipsync on the chorus.

## What the skill established before planning

| Question | Answer |
|---|---|
| Project type | Music video, recurring character |
| Master audio | `neon-tide-master.wav`, 92.000 s |
| Performer | One, present in every shot |
| Location | Coastal, dusk, single act |
| Lipsync | Yes — 8 of 12 shots |
| Delivery format | 16:9 |
| Engines | Image-to-video and lipsync per `references/pipeline.md` |

## Decisions taken, and why

**One act, one wardrobe.** The character bible allows one wardrobe per act, and
every change multiplies drift risk. A 92-second piece does not need a second act
to hold attention, so it does not get one.

**Dusk fixed at a single point in the sky.** Real dusk moves in ten minutes.
A generated dusk does not have to, and a light that shifts between shots reads
as a continuity error rather than as time passing. The bible freezes it.

**Lipsync only where the performer faces camera.** Four shots — the two sequence
shots and the opening instrumental — carry no vocal, so they carry no lipsync
cost. That decision alone removes 32 of 92 seconds from the lipsync bill.

**No hand-held camera language anywhere.** Fast motion multiplies geometry
artefacts, and this piece already asks the engine for two travelling shots.

## Open risks, carried into the pilot

| Risk | Where | Resolution |
|---|---|---|
| Shot 11 is a 10.0 s sequence shot, longer than any take validated so far | `02-decupage.md` | PENDING [maximum safe duration for this engine] — pilot must test at 10.0 s or the shot splits into two concatenated takes |
| Beard in the lipsync region | Shots 03, 06, 09, 12 | PENDING [confirm the lipsync engine handles a full beard] — see `references/shots/close-up-lipsync.md` |
| Water surface behind the performer | All shots | Moving water is generous with artefacts; the pilot is deliberately a water-heavy shot so the worst case is tested first |

## Pilot shot

**Shot 03** — the first close-up with lipsync, framed against water.

It is chosen because it is the most expensive shot to be wrong about: it carries
the two unresolved risks at once (beard, water) and it is the shot type the whole
pipeline exists to serve. If shot 03 passes, the batch is safe. If it fails, it
fails for the price of one shot.

## What this package does not include

No footage was generated. No API credit was spent. Nothing here has been
validated against a real engine — the `PENDING` markers are exactly the values a
real production run would fill in.
