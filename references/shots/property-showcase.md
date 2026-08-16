---
name: property-showcase
one-liner: environment shot for a real-estate showcase — no character, geometry is the protagonist
applies-to: real estate, architecture, interiors; any video where the space is the product
status: under validation — derived from the DZ0417 dry-run; PENDING values to be filled on the pilot
---

## Intent
In a property showcase the buyer judges the video on ONE thing: whether the
space looks real and liveable. A straight line that bends means a property that
looks fake, which means a video working against the sale. Here, geometry is the
character's face.

## Fundamental difference vs. character shots
There is no character bible — there is a **space bible** (see the "Projects
without a character" section in `../character-bible.md`): light, palette, time
of day and lens style frozen for the entire property. Consistency between
shots comes from keeping the SAME lighting environment in every room, even when
the source photos were taken at different times of day.

## Mandatory input
A real photo of the room as the reference image. Never generate the interior of
a real property from pure text: the video has to correspond to the property
being advertised. This is an ethical and legal matter — a showcase that shows a
space which does not exist is deceptive advertising. See "Limits" below.

## Prompt structure
[FULL SPACE BIBLE] + [camera: ONE slow named movement — "slow dolly-in",
"gentle lateral tracking"] + [prohibitions: "no people, no text, no furniture
changes"]

## Parameters
| Parameter | Value | Source |
|---|---|---|
| Take duration (interior) | PENDING | DZ0417 pilot — interiors degrade before exteriors |
| Take duration (exterior/balcony/view) | PENDING | DZ0417 pilot |
| Movement | 1 per shot, slow | general pipeline rule |
| Aspect ratio | project decision (16:9 portfolio / 9:16 Reels-Stories) | cost doubles if you generate both — decide BEFORE locking the decupage |

## Known failures
- Straight lines (doors, windows, tiles, skirting boards) bend during long
  movements → short concatenated takes beat one long sequence shot.
- Mirrors and glass: reflections hallucinate content → frame to avoid a frontal
  mirror, or accept a high reject rate on those shots. PENDING [reject rate
  observed on the pilot].
- Furniture "melting" during fast pans → slow speed is non-negotiable.

## Limits (non-negotiable)
The video must not add, remove or "improve" elements of the real property
(furniture that is not there, a fake view, an enlarged room). Generating
movement over what the real photo shows: yes. Inventing what does not exist:
no — it is the real-estate equivalent of inventing a coefficient without a
source.

## Acceptance criteria
Geometry stable from the first to the last frame; fidelity to the source photo
checked side by side; light consistent with the other shots of the property.
