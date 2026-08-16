# Audio-cut plan — "Neon Tide" (fictional)

One audio segment per lipsync shot, cut from the master. These are the files fed
to the lipsync engine alongside each generated shot.

Every timestamp below comes from the "Audio (in–out)" column of
`02-decupage.md`. None of them is restated by hand — if the decupage changes,
these commands are regenerated from it, never edited in place. The decupage is
the single source of truth for time; this file is a projection of it.

**Runs locally, costs nothing, requires only ffmpeg.**

## The 8 cuts

| Shot | In | Out | Duration (s) | Output |
|---|---|---|---|---|
| 02 | 00:07.500 | 00:15.000 | 7.500 | `shot_02.wav` |
| 03 | 00:15.000 | 00:21.000 | 6.000 | `shot_03.wav` |
| 05 | 00:28.000 | 00:36.000 | 8.000 | `shot_05.wav` |
| 06 | 00:36.000 | 00:42.500 | 6.500 | `shot_06.wav` |
| 08 | 00:50.000 | 00:58.000 | 8.000 | `shot_08.wav` |
| 09 | 00:58.000 | 01:04.500 | 6.500 | `shot_09.wav` |
| 10 | 01:04.500 | 01:12.000 | 7.500 | `shot_10.wav` |
| 12 | 01:22.000 | 01:32.000 | 10.000 | `shot_12.wav` |

Total: 60.000 s of lipsync audio across 8 files. Matches the derived total in
`02-decupage.md`.

## Commands

```bash
ffmpeg -i neon-tide-master.wav -ss 00:00:07.500 -to 00:00:15.000 shot_02.wav
ffmpeg -i neon-tide-master.wav -ss 00:00:15.000 -to 00:00:21.000 shot_03.wav
ffmpeg -i neon-tide-master.wav -ss 00:00:28.000 -to 00:00:36.000 shot_05.wav
ffmpeg -i neon-tide-master.wav -ss 00:00:36.000 -to 00:00:42.500 shot_06.wav
ffmpeg -i neon-tide-master.wav -ss 00:00:50.000 -to 00:00:58.000 shot_08.wav
ffmpeg -i neon-tide-master.wav -ss 00:00:58.000 -to 00:01:04.500 shot_09.wav
ffmpeg -i neon-tide-master.wav -ss 00:01:04.500 -to 00:01:12.000 shot_10.wav
ffmpeg -i neon-tide-master.wav -ss 00:01:22.000 -to 00:01:32.000 shot_12.wav
```

Deliberately without `-c copy`. Stream copy cuts at the nearest keyframe, which
is fine for a rough segment and wrong for lipsync, where a few milliseconds of
drift at the head of the file lands as a visibly wrong first viseme. Re-encoding
a few seconds of PCM audio costs nothing and gets the exact boundary asked for.

## Same thing as a loop

For a real project this table is long enough that hand-written commands become a
transcription-error surface. Driving them from one list keeps the timestamps in
a single place:

```bash
#!/usr/bin/env bash
set -euo pipefail

MASTER="neon-tide-master.wav"

# shot  in           out
CUTS="
02 00:00:07.500 00:00:15.000
03 00:00:15.000 00:00:21.000
05 00:00:28.000 00:00:36.000
06 00:00:36.000 00:00:42.500
08 00:00:50.000 00:00:58.000
09 00:00:58.000 00:01:04.500
10 00:01:04.500 00:01:12.000
12 00:01:22.000 00:01:32.000
"

while read -r shot start end; do
  [ -z "$shot" ] && continue
  echo "shot $shot: $start -> $end"
  ffmpeg -nostdin -loglevel error -y \
    -i "$MASTER" -ss "$start" -to "$end" "shot_${shot}.wav"
done <<< "$CUTS"

echo "done — $(ls shot_*.wav | wc -l) segments"
```

## Verify before spending anything on lipsync

```bash
for f in shot_*.wav; do
  printf '%s\t%s\n' "$f" "$(ffprobe -v error -show_entries format=duration \
    -of default=noprint_wrappers=1:nokey=1 "$f")"
done
```

Each duration must equal the shot's duration in `02-decupage.md`. A mismatch
here means the lipsync pass is about to be paid for against the wrong audio,
which is the most avoidable way to waste credits in the whole pipeline.

## Cut boundaries

Every boundary above falls on a phrase edge, never inside a word. An audio cut
starting mid-syllable produces a wrong first viseme that is obvious even to
someone not looking for it — recorded as a known failure in
`references/shots/close-up-lipsync.md`.

**Padding around each cut: PENDING** [padding in ms used before and after the
vocal in production]. Until that value is measured, these cuts are exact to the
decupage with no padding applied. The pilot resolves it: if shot 03 comes back
clipped at the head or the tail, padding is what fixes it, and the measured
value gets written into `references/pipeline.md` for every project after this
one.
