# Decupage — "Vila Mar 402" (fictional)

Single source of truth for time. Locked before any frame is generated.

## Project header

| Field | Value |
|---|---|
| Project | Vila Mar 402 (fictional) |
| Target duration | 30.000 s |
| Music / master audio | None — delivered mute, music added at post per platform |
| Space bible | `01-space-bible.md`, frozen |
| Aspect ratio | 9:16, decided before lock |
| Video engine | PENDING [name + version at lock time] |
| Lipsync engine | Not applicable — no character |
| Lock date | PENDING [fill on the day the decupage is frozen] |

**Master duration:** 30.000 s

## Shot table

| # | Dur. (s) | Audio (in–out) | Shot type (card) | Framing | Action (ONE) | Camera | Lipsync? | Transition to next |
|---|---|---|---|---|---|---|---|---|
| 01 | 5.000 | none | property-showcase | Wide, living room from the entrance | None — space only | Slow dolly-in toward the window | no | cut |
| 02 | 5.000 | none | property-showcase | Wide, kitchen along the counter run | None — space only | Gentle lateral tracking, left to right | no | cut |
| 03 | 5.000 | none | property-showcase | Wide, main bedroom from the doorway | None — space only | Slow dolly-in | no | cut |
| 04 | 5.000 | none | property-showcase | Medium wide, bathroom, mirror off-axis | None — space only | Very slow dolly-in | no | cut |
| 05 | 5.000 | none | property-showcase | Wide, balcony looking out | None — space only | Slow dolly-in toward the rail | no | cut |
| 06 | 5.000 | none | property-showcase | Wide, building exterior from the street | None — space only | Gentle lateral tracking, right to left | no | fade out |

**Sum of shot durations: 30.000 s.** Equal to the master duration. Checked
before locking, and re-checked by `scripts/validate-skill.mjs` on every commit.

## Derived totals

| Quantity | Value | How it is derived |
|---|---|---|
| Shots | 6 | rows above |
| Total video seconds | 30.000 | sum of Dur. (s) |
| Shots with lipsync | 0 | no character in the project |
| Total lipsync seconds | 0.000 | — |
| Reference images | 6 | one real photo per room, supplied — not generated |

The reference images for this project **cost nothing**: they are the agent's own
listing photographs. This is the structural difference from a character project,
where every reference image is generated and billed.

## Order of rooms

Entrance, kitchen, bedroom, bathroom, balcony, exterior. This is the order
someone walks the apartment, not the order that front-loads the best rooms.

A showcase that opens with the balcony view and closes on the bathroom tells the
viewer the bathroom is the disappointment. Walking order lets the balcony land
as an arrival, and puts the exterior last as the shot that says where all of it
is.

## Every shot uses the same card

All six rows name `property-showcase`. No sequence shots, despite the wide
interiors inviting them: `references/shots/sequence-shot.md` records that
straight lines bend during long movements and that short concatenated takes beat
one long move for real estate. Six 5.000 s takes is that guidance applied.

## Sign-off

- [ ] Decupage locked on ____ /____ /____
- [ ] Pilot (shot 01) approved before the batch
- [ ] Mirror behaviour in shot 04 resolved — movement holds / shot becomes a static hold
- [ ] Every generated shot compared side by side against its source photograph
- [ ] Final sign-off documented in writing
