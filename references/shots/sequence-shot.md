---
name: sequence-shot
one-liner: continuous camera movement through a generative scene — cinematic impact
applies-to: openings, act transitions, environment showcases (e.g. real estate)
status: under validation — use only after an approved pilot
---

## Intent
The shot that separates "AI video" from cinema: the camera travels through the
space and the world holds up. High impact, high risk of artefacts.

## Prompt structure
[BIBLE / scene description] + a SINGLE camera movement, named with cinema
vocabulary ("slow dolly-in", "crane rise", "lateral tracking shot") + a speed
("slow", "gentle"). Models respond better to cinematography terms than to
literal descriptions of a trajectory.

## Parameters
| Parameter | Value | Source |
|---|---|---|
| Maximum duration before degrading | PENDING | test per engine and version |
| Movements per shot | 1 | pipeline rule: one intent per shot |
| Speed | slow | fast movements multiply geometry artefacts |

## Known failures
- Combining camera movement with a complex character action → pick one as the
  protagonist of the shot.
- Interiors with straight lines (doors, windows, tiles) bend during long
  movements — for real estate, prefer short concatenated takes over one long
  sequence shot. PENDING [validate the safe duration for interiors].

## Acceptance criteria
Scene geometry stable from the first to the last frame; no object "morphing";
constant speed (unintended acceleration is a reject).
