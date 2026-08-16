# Character bible — consistency across shots

The biggest problem in generative video with a recurring character is not image
quality — it is the character becoming A DIFFERENT PERSON between shot 3 and
shot 4. The bible solves this through exhaustive, immutable specification.

## Principle

The bible is a CANONICAL, FROZEN block of text that goes in word for word,
identically, in every reference-image prompt and every video prompt of the
project. You do not paraphrase the bible. You do not "improve" the bible
mid-production. Changing the bible means a new visual project.

## Structure (7 mandatory fields)

1. **Fixed physical identity** — apparent age, ethnicity, facial structure,
   hair/baldness, beard. Everything that defines the face.
2. **Identity accessories** — items that anchor recognition (e.g. thin-framed
   glasses). Generative models hold identity better when there are discreet,
   repeatable visual anchors.
3. **Canonical wardrobe** — exact garment and colour. One per "act" of the video
   at most; every wardrobe change multiplies the risk of drift.
4. **Palette and light** — time of day, colour temperature, environment (e.g.
   golden hour, turquoise ocean). Light is part of the identity.
5. **Posture and energy** — how the character moves and occupies the frame.
6. **Explicit prohibitions** — what the model tends to add and must not (e.g.
   "no hat, no jewelry, no tattoos").
7. **Camera style phrase** — the photographic signature of the project,
   repeated on every shot.

## Real example (structure of the validated case)

> Character: Black man, ~40 years old, bald, full beard, thin-framed glasses,
> black turtleneck. Light: golden hour, turquoise ocean in the background.
> [Fields 5–7: fill in with the project's frozen canonical version — the
> complete bible lives with the project, not with the skill.]

## Use in prompts

```
[BIBLE — paste in full, unedited]
+
[SHOT ACTION — one main action, see the card for the shot type]
+
[CAMERA — framing and movement for the shot, from the decupage]
```

## Known failures

- Paraphrasing the bible "to shorten the prompt" → identity drift.
- Describing emotion without describing it physically ("sad" vs. "lowered gaze,
  slumped shoulders") → the model changes the face to express the emotion.
- Two actions in the same shot → the model sacrifices identity to handle the
  movement.

---

## Projects without a character: the space bible

Not every project has a character (real estate, products, landscapes). In those
cases do NOT force the 7 fields — use the **space bible**, with 5 fields:

1. **Identity of the space/object** — what it is, materials, dominant colours.
   For a real property: the source photo IS the identity; the bible describes
   what the photo shows, never what you wish it showed.
2. **Canonical light** — time of day, temperature, direction. ONE lighting
   condition for the entire project, even when the source photos vary — this is
   what makes different rooms look like the same property.
3. **Frozen palette** — 3–4 colours that tie every shot together.
4. **Camera signature** — the project's default lens/angle/height (e.g. "wide,
   eye height, always level" — a crooked horizon in a property video reads as a
   structural defect).
5. **Explicit prohibitions** — what the model tends to add and must not (e.g.
   "no people, no pets, no text, no added furniture").

Same rules as the character bible: a CANONICAL FROZEN block, pasted in full in
every prompt, no paraphrase, no "improvements" mid-production.

Corresponding card: `shots/property-showcase.md`.
