# Shot prompts — "Neon Tide" (fictional)

One prompt per shot, ready to paste. Every prompt is assembled the same way,
per `references/character-bible.md`:

```
[BIBLE — pasted in full, unedited]  +  [ONE action]  +  [camera, from the decupage]
```

`[BIBLE]` below stands for the canonical block in `01-character-bible.md`. It is
written out in full in shot 01 to show the assembled result; from shot 02 on it
is abbreviated **for this document only**. In the actual prompt it is pasted
whole, every time. Paraphrasing it to save space is the single most reliable way
to lose the character.

---

## Shot 01 — master-performance, 7.500 s, no lipsync

Written out in full, exactly as it goes to the engine:

> A performer in their early thirties, light brown skin, close-cropped black
> hair, a short full beard kept sharp at the jaw, thick dark eyebrows, a narrow
> face with high cheekbones. Thin round wire-frame glasses with a faint amber
> tint, worn in every shot. A single small silver hoop in the left ear, nothing
> else. Wardrobe: an oversized raw-linen shirt in bone white, sleeves rolled to
> the forearm, worn open over a plain black tee, and dark indigo trousers.
> Light: the last twenty minutes of dusk, sun already below the horizon, sky
> graded from deep teal overhead to a narrow band of burnt orange at the
> waterline; the performer lit from the front left by that residual warm light,
> with cool blue fill from the sky behind. Palette: teal, bone white, burnt
> orange, indigo. Posture: still and grounded, weight on the back foot, chin
> level, movement economical — small deliberate gestures rather than large ones.
> No hat, no sunglasses, no visible tattoos, no additional jewelry, no logos or
> text on the clothing, no other people in frame. Shot on anamorphic glass,
> shallow depth of field, gentle halation on the highlights, fine 35mm grain.
> Stands still at the waterline, looking out to sea, not moving.
> Wide shot, performer small in frame against the horizon, locked camera with a
> very slight lateral drift to the left.

---

## Shot 02 — master-performance, 7.500 s, lipsync

> [BIBLE] Sings to camera, weight settling onto the back foot.
> Medium shot, waist up, locked camera with a slow push in.

Mouth state for the base video: PENDING [see the open question at the end of
this file].

---

## Shot 03 — close-up-lipsync, 6.000 s, lipsync — PILOT SHOT

> [BIBLE] Sings to camera with contained emotion, small deliberate head
> movement, gaze steady.
> Frontal close-up, head and shoulders, locked camera, shallow depth of field.

This is the pilot. It is generated first, taken end to end through the audio cut
and the lipsync pass, and approved before any other shot is generated.

Acceptance, per `references/shots/close-up-lipsync.md`: frame-exact sync on the
plosives; identity preserved against the bible item by item; clean in and out
frames. The beard risk and the water-behind risk are both resolved here or the
batch does not start.

---

## Shot 04 — sequence-shot, 7.000 s, no lipsync

> [BIBLE] Walks three unhurried steps along the waterline, entering from frame
> right.
> Wide shot, slow lateral tracking shot moving left to right, constant speed.

One movement, named in cinema vocabulary, at a stated speed. The performer walks
*or* the camera does something complicated — not both. Here the camera leads.

---

## Shot 05 — master-performance, 8.000 s, lipsync

> [BIBLE] Sings, one hand rising to chest height and stopping there.
> Medium shot, waist up, three-quarter turn to camera, locked camera with a
> slight drift to the right.

The hand movement stops inside the shot. An action still in progress at the cut
gives the next shot something to contradict.

---

## Shot 06 — close-up-lipsync, 6.500 s, lipsync

> [BIBLE] Sings, gaze lowering on the final beat of the phrase.
> Close-up, head and shoulders, three-quarter angle, locked camera.

"Gaze lowering" is the physical description of the emotion. The word for the
emotion itself is deliberately absent — naming it makes the engine rebuild the
face to perform it.

Face angle at three-quarter is the widest angle used for a lipsync shot in this
package. PENDING [maximum angle the lipsync engine holds] — if the pilot shows
three-quarter degrading, shots 06 and 10 go frontal.

---

## Shot 07 — sequence-shot, 7.500 s, no lipsync

> Deep teal dusk sky over open water, a narrow band of burnt orange at the
> waterline, gentle swell, no people in frame. Anamorphic glass, shallow depth
> of field, gentle halation, fine 35mm grain.
> Wide low shot, water filling the foreground, slow dolly-in toward the horizon.

The only prompt in the package that does not carry the character bible, because
the character is not in the shot. What it does carry is fields 4 and 7 — light
and camera signature — because those are what make this read as the same film.

---

## Shot 08 — master-performance, 8.000 s, lipsync

> [BIBLE] Sings, both arms loose at the sides, still.
> Medium shot, waist up, frontal, locked camera with a slow push in.

---

## Shot 09 — close-up-lipsync, 6.500 s, lipsync

> [BIBLE] Sings, chin lifting slightly through the phrase.
> Frontal close-up, head and shoulders, locked camera.

---

## Shot 10 — master-performance, 7.500 s, lipsync

> [BIBLE] Sings, turning halfway toward the water on the last words.
> Medium wide shot, full torso, locked camera with a slight drift to the left.

Widest framing carrying lipsync in this package. Per
`references/shots/master-performance.md`, framings that are too wide degrade the
face for the lipsync pass, and the minimum viable face area is still PENDING.
If the pilot indicates this framing is too wide, shot 10 tightens to match
shot 05.

---

## Shot 11 — sequence-shot, 10.000 s, no lipsync

> [BIBLE] Stands still at the waterline as the camera rises away.
> Wide shot, performer centred and small, sky dominant, slow crane rise,
> constant speed.

Longest take in the package and the flagged risk from `02-decupage.md`. If
geometry does not hold for 10.000 s, this splits into two 5.000 s takes cut on
the movement.

---

## Shot 12 — close-up-lipsync, 10.000 s, lipsync

> [BIBLE] Sings the final line, then holds still, gaze steady on camera.
> Frontal close-up, head and shoulders, locked camera with an imperceptible push
> in, shallow depth of field.

The longest lipsync shot, placed last on purpose: by the time it is generated,
the pilot has already answered every open question about the beard, the face
angle and the mouth state. It is the shot that most needs a settled pipeline, so
it gets the most settled one.

---

## Open question carried to the pilot

**Mouth state in the base video.** Whether the base video should show a neutral
mouth or a mouth already singing, before the lipsync pass runs over it, is
PENDING — recorded as a known unknown in
`references/shots/close-up-lipsync.md`.

The pilot resolves it by generating shot 03 both ways and comparing. Two
generations of one 6.000 s shot is the cheapest possible way to answer a
question that affects all eight lipsync shots.
