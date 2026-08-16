---
name: master-performance
one-liner: artist performance shot, medium/full body, anchors the whole video
applies-to: music videos; any video with a performing character
status: validated in production (real music video, shots 01-03)
---

## Intent
The master shot is the floor of the video: it establishes character, place and
energy. Close-ups and detail shots cut away from it. Get the master wrong and
you reshoot the whole video.

## Prompt structure
[FULL BIBLE] + [single action, e.g. "sings looking at the horizon, subtle sway
on the beat"] + [camera, e.g. "medium shot, locked camera with a slight lateral
drift"]

## Parameters
| Parameter | Value | Source |
|---|---|---|
| Take duration | PENDING | real production |
| Framing that holds identity | medium (waist up) | production: framings that are too wide degrade the face for lipsync |
| Actions per shot | 1 | production: 2+ actions cause identity drift |

## Known failures
- Full body with a small face in frame → the later lipsync pass fails or looks
  artificial. If the shot is meant for lipsync, the face needs a minimum area
  in frame: PENDING [measure on the approved shots].
- Fast camera movement plus performance → the model prioritises the camera and
  "freezes" the character.

## Acceptance criteria
Identity checked against the bible; movement natural to the tempo of the music;
face large enough in frame if lipsync follows.
