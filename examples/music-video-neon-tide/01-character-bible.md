# Character bible — "Neon Tide" (fictional)

Structure per `references/character-bible.md`, all 7 fields.

This block is **frozen**. It is pasted into every reference-image prompt and
every video prompt in `03-shot-prompts.md`, byte for byte, unedited. It is not
paraphrased to shorten a prompt. It is not improved mid-production. Changing it
means a new visual project.

---

## THE CANONICAL BLOCK

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

---

## Field-by-field breakdown

Kept for review only. The block above is what goes into prompts, in one piece.

| # | Field | Content |
|---|---|---|
| 1 | Fixed physical identity | Early thirties, light brown skin, close-cropped black hair, short full beard sharp at the jaw, thick dark eyebrows, narrow face, high cheekbones |
| 2 | Identity accessories | Thin round wire-frame glasses, faint amber tint; one small silver hoop, left ear |
| 3 | Canonical wardrobe | Oversized bone-white raw-linen shirt, sleeves rolled, open over a plain black tee; dark indigo trousers |
| 4 | Palette and light | Last twenty minutes of dusk; teal to burnt orange gradient; warm key front-left, cool sky fill behind |
| 5 | Posture and energy | Still, grounded, weight on the back foot, chin level, economical movement |
| 6 | Explicit prohibitions | No hat, no sunglasses, no visible tattoos, no additional jewelry, no logos or text, no other people |
| 7 | Camera style phrase | Anamorphic glass, shallow depth of field, gentle halation, fine 35mm grain |

## Notes on the choices

**The glasses are load-bearing.** They are the strongest identity anchor in the
block — a discreet, repeatable shape the engine can hold onto across shots. The
single hoop works the same way at a smaller scale. This is why field 6 forbids
*additional* jewelry rather than all jewelry: one anchor helps, three compete.

**Light is specified as a state, not a time.** "Sun already below the horizon"
is a fact the engine can render. "Golden hour" is a mood it will interpret
differently every time.

**The prohibitions list what this kind of prompt attracts.** Sunglasses at dusk
by the water, a hat, a tattoo on a rolled-up forearm — these are the things a
model adds unprompted. Naming them is cheaper than regenerating.

**Nothing here describes emotion.** Per the known failures in
`references/character-bible.md`, "melancholy" makes the engine rebuild the face
to express it. Emotion belongs in the shot action, described physically:
"lowered gaze", not "sad".
