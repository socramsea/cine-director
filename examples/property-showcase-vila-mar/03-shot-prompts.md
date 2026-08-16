# Shot prompts — "Vila Mar 402" (fictional)

One prompt per shot. Assembly, per
`references/shots/property-showcase.md`:

```
[SPACE BIBLE — pasted in full]  +  [ONE slow named camera movement]  +  [prohibitions]
```

Every shot is generated **from the real photograph of that room** as the
reference image. None of these prompts is used to generate an interior from
text alone. The prompt describes the movement over a photograph; it does not
describe an apartment.

`[BIBLE]` stands for the canonical block in `01-space-bible.md`, written out in
full in shot 01 and abbreviated after that for this document only.

---

## Shot 01 — 5.000 s — living room — PILOT SHOT

Reference image: `photos/01-living.jpg` (real listing photograph)

Written out in full, exactly as it goes to the engine:

> A 68 m² two-bedroom apartment on the fourth floor of a low coastal building.
> Interiors in warm white plaster with pale oak flooring in the living areas and
> large-format matte grey porcelain tile in the kitchen and bathroom; window and
> door frames in slim black aluminium; a single continuous eye-level horizon
> line through the living space. Light: mid-morning, roughly 10am, sun high and
> slightly off-frame to the left, daylight-balanced and even, soft shadows with
> no hard edges, every room lit as if photographed within the same twenty
> minutes. Palette: warm white, pale oak, matte grey, black aluminium. Camera:
> wide lens, held at eye height, horizon always level, no tilt, no roll, no
> handheld motion. No people, no pets, no text or graphics, no added or altered
> furniture, no changed views through the windows, no additional light fixtures,
> no reflections of anything not present in the room.
> Slow dolly-in from the entrance toward the window, constant speed, horizon
> level throughout.

The pilot. Widest interior, tiled floor, straight lines running in every
direction — the worst case for geometry, generated first on purpose.

Acceptance: floor and skirting lines straight from the first frame to the last;
window frames unbent; furniture unchanged from the photograph, checked side by
side; no drift in the light.

---

## Shot 02 — 5.000 s — kitchen

Reference image: `photos/02-kitchen.jpg`

> [BIBLE] Gentle lateral tracking shot moving left to right along the counter
> run, constant speed, horizon level throughout.

Large-format tile on both floor and splashback. Lateral movement is the hardest
direction for a tiled grid to survive, so the speed is the slowest of any shot
in the package that is not the bathroom.

---

## Shot 03 — 5.000 s — main bedroom

Reference image: `photos/03-bedroom.jpg`

> [BIBLE] Slow dolly-in from the doorway, constant speed, horizon level
> throughout.

The easiest shot in the package: oak floor rather than tile, fewer straight
lines, soft furniture that tolerates minor drift. Generated late, when the
engine settings are already settled.

---

## Shot 04 — 5.000 s — bathroom

Reference image: `photos/04-bathroom.jpg`

> [BIBLE] Very slow dolly-in, mirror kept off-axis at frame left, constant
> speed, horizon level throughout.

The known-failure shot. Mirrors and glass hallucinate reflected content, and a
bathroom is mostly mirror, glass and tile.

Two mitigations are already in the prompt: the framing keeps the mirror off-axis
rather than facing it, and the movement is the slowest in the package.

**Fallback, decided in advance:** if the reflection drifts, this shot becomes a
static hold on the reference photograph for 5.000 s. A still bathroom in a
moving video is a stylistic hiccup. A bathroom whose mirror invents a second
window is a listing problem.

PENDING [reject rate observed for mirrored surfaces on this engine].

---

## Shot 05 — 5.000 s — balcony

Reference image: `photos/05-balcony.jpg`

> [BIBLE] Slow dolly-in toward the rail, constant speed, horizon level
> throughout, the view beyond the rail unchanged from the source photograph.

The hardest shot for the frozen light: interior and exterior exposure in one
frame, and the one place where the engine is most tempted to improve the view.

The prohibition against changed window views is in the bible already; it is
restated in this prompt because this is the shot where it matters most. This is
the only place in either example where a bible field is deliberately repeated in
the shot line, and it is repeated verbatim rather than reworded.

Generated second, right after the pilot, so the light question is answered
before the remaining four shots commit to it.

---

## Shot 06 — 5.000 s — building exterior

Reference image: `photos/06-exterior.jpg`

> [BIBLE] Gentle lateral tracking shot moving right to left across the building
> frontage, constant speed, horizon level throughout.

Closing shot. Exterior geometry is more forgiving than interior — no tiled grid,
no ceiling line — but the building's own verticals are now the straight lines
under test, and a leaning façade is worse than a leaning floor.

Movement reverses direction from shot 02 so the piece closes moving against its
own earlier motion, which reads as an ending rather than as more of the same.

---

## What is not in any of these prompts

No adjectives selling the apartment. No "spacious", no "bright and airy", no
"stunning ocean views". Those words do two things, both bad: they push the
engine toward inventing the quality being claimed, and they put a sales claim
into a document that is supposed to describe what a photograph shows.

The apartment is 68 m². The video shows 68 m². The listing copy is a different
deliverable, written by a person who is accountable for it.
