# Decupage — "Neon Tide" (fictional)

Single source of truth for time. Locked before any frame is generated.
Every timestamp in `04-audio-cuts.md` is derived from this table, not restated.

## Project header

| Field | Value |
|---|---|
| Project | Neon Tide (fictional) |
| Target duration | 92.000 s |
| Music / master audio | `neon-tide-master.wav`, 92.000 s |
| Character bible | `01-character-bible.md`, frozen |
| Video engine | PENDING [name + version at lock time] |
| Lipsync engine | PENDING [name + version at lock time] |
| Lock date | PENDING [fill on the day the decupage is frozen] |

**Master duration:** 92.000 s

## Shot table

| # | Dur. (s) | Audio (in–out) | Shot type (card) | Framing | Action (ONE) | Camera | Lipsync? | Transition to next |
|---|---|---|---|---|---|---|---|---|
| 01 | 7.500 | 00:00.000–00:07.500 | master-performance | Wide, performer small against the waterline | Stands still, looking out to sea | Locked, slight lateral drift left | no | cut |
| 02 | 7.500 | 00:07.500–00:15.000 | master-performance | Medium, waist up | Sings to camera, weight settling on the back foot | Locked, slow push in | yes | cut |
| 03 | 6.000 | 00:15.000–00:21.000 | close-up-lipsync | Close, head and shoulders | Sings to camera, contained, small head movement | Locked | yes | cut |
| 04 | 7.000 | 00:21.000–00:28.000 | sequence-shot | Wide, performer entering frame right | Walks three steps along the waterline | Slow lateral tracking shot, left to right | no | cut |
| 05 | 8.000 | 00:28.000–00:36.000 | master-performance | Medium, waist up, three-quarter turn | Sings, one hand rising to chest height | Locked, slight drift right | yes | cut |
| 06 | 6.500 | 00:36.000–00:42.500 | close-up-lipsync | Close, head and shoulders, three-quarter | Sings, gaze lowering on the last beat | Locked | yes | cut |
| 07 | 7.500 | 00:42.500–00:50.000 | sequence-shot | Wide, low, water in the foreground | No performer action, water only | Slow dolly-in toward the horizon | no | cut |
| 08 | 8.000 | 00:50.000–00:58.000 | master-performance | Medium, waist up, frontal | Sings, both arms loose at the sides | Locked, slow push in | yes | cut |
| 09 | 6.500 | 00:58.000–01:04.500 | close-up-lipsync | Close, head and shoulders, frontal | Sings, chin lifting slightly | Locked | yes | cut |
| 10 | 7.500 | 01:04.500–01:12.000 | master-performance | Medium wide, full torso | Sings, half turn toward the water | Locked, slight drift left | yes | cut |
| 11 | 10.000 | 01:12.000–01:22.000 | sequence-shot | Wide, performer centre, sky dominant | Stands still as the camera rises | Slow crane rise | no | dissolve |
| 12 | 10.000 | 01:22.000–01:32.000 | close-up-lipsync | Close, head and shoulders, frontal | Sings the final line, then holds still | Locked, imperceptible push in | yes | fade out |

**Sum of shot durations: 92.000 s.** Equal to the master duration. Checked
before locking, and re-checked by `scripts/validate-skill.mjs` on every commit.

## Derived totals

| Quantity | Value | How it is derived |
|---|---|---|
| Shots | 12 | rows above |
| Total video seconds | 92.000 | sum of Dur. (s) |
| Shots with lipsync | 8 | 02, 03, 05, 06, 08, 09, 10, 12 |
| Total lipsync seconds | 60.000 | sum of Dur. (s) where Lipsync = yes |
| Shots without lipsync | 4 | 01, 04, 07, 11 — 32.000 s carrying no lipsync cost |

These four numbers are the entire input to `05-cost-estimate.md`.

## RISK — shot 11 exceeds the validated envelope

Shot 11 is a 10.000 s crane rise. No take that long has been validated on this
pipeline, and `references/shots/sequence-shot.md` records that geometry degrades
over long movements, with the safe duration still PENDING.

It is left in the decupage at full length **and flagged**, rather than quietly
shortened, because the decision belongs to the pilot:

- If the pilot holds geometry at 10.000 s, the shot ships as written.
- If it does not, shot 11 splits into two concatenated takes of 5.000 s, cut on
  the camera's own movement. The audio does not change; no other shot moves.

Both outcomes leave the master duration at 92.000 s. That is why the risk can be
carried into production instead of blocking the lock.

## Sign-off

- [ ] Decupage locked on ____ /____ /____
- [ ] Pilot (shot 03) approved before the batch
- [ ] Shot 11 duration resolved — ships at 10.000 s / splits into 2 × 5.000 s
- [ ] Final sign-off documented in writing
