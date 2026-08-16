# Decupage template — generative video

The project's single source of truth. It locks BEFORE a single frame is
generated. Structure validated in real production (music video, 18 shots).

## Project header

| Field | Value |
|---|---|
| Project | |
| Target duration | |
| Music / master audio | (file + exact duration) |
| Character bible | (link to the frozen canonical block) |
| Video engine | (name + version — the version matters) |
| Lipsync engine | (name + version) |
| Lock date | |

## Shot table

| # | Dur. (s) | Audio (in–out) | Shot type (card) | Framing | Action (ONE) | Camera | Lipsync? | Transition to next |
|---|---|---|---|---|---|---|---|---|
| 01 | | 00:00.000–00:00.000 | master-performance | | | | yes/no | cut/dissolve |
| 02 | | | | | | | | |
| ... | | | | | | | | |

Table rules:
- The "Audio" column is accurate to the millisecond — it generates the ffmpeg
  commands automatically. Cut on a breath or a pause, never mid-syllable.
- The "Action" column: ONE main action. Two actions means two shots.
- The "Shot type" column references a card in `references/shots/` — the shot's
  prompt is written by reading the corresponding card.
- The sum of the durations equals the duration of the master (check before
  locking).

## Cost block (fill in during the dry-run)

| Item | Qty | Unit | Unit price (source + date) | Total |
|---|---|---|---|---|
| Video generation | Σ seconds | s | check with the provider TODAY | |
| Lipsync | Σ seconds with lipsync | s | check with the provider TODAY | |
| Margin for regeneration (pilot + rejects) | ×1.5 on the total | | | |

Never present a cost without the "source + date" column filled in.

## Sign-off

- [ ] Decupage locked on ____ /____ /____
- [ ] Pilot (shot ___) approved before the batch
- [ ] Final sign-off documented in writing
