# Brief — "Vila Mar 402" (fictional)

> Fictional listing, published as a complete worked example. The property, the
> address and the agency do not exist.

## What was asked

> Storyboard a 30s vertical showcase of this apartment for Reels. I have photos
> of every room.

## What the skill established before planning

| Question | Answer |
|---|---|
| Project type | Property showcase — no character |
| Subject | 2-bedroom apartment, 68 m², coastal building, 4th floor |
| Source material | One real photo per room, supplied by the agent |
| Target duration | 30.000 s |
| Delivery format | 9:16 vertical, single deliverable |
| Lipsync | None — no character, no vocal |

## Decisions taken, and why

**9:16 only, decided before the decupage was locked.** Generating both 16:9 and
9:16 doubles the video bill. `references/shots/property-showcase.md` is explicit
that this is a project decision taken *before* locking, not a format that can be
added later for free. The brief said Reels, so the piece is vertical and only
vertical.

**Six shots of equal length.** Short concatenated takes rather than one long
sequence shot, because interiors are where straight lines bend — doors, window
frames, skirting boards, tiles. A 5.000 s take gives the engine less room to
drift than a 15.000 s one, and the cut hides what remains.

**One lighting condition across the whole property.** The source photos were
taken at different times of day, as they always are. The space bible freezes a
single light, and every shot is generated to it. Rooms lit differently read as
different buildings.

**No character, so no character bible.** This project uses the 5-field space
bible in `references/character-bible.md`. Forcing the 7-field character
structure onto a project without a character produces a document with five empty
fields and no benefit.

## The line this project does not cross

The video may generate **movement over what the real photos show**. It may not
add, remove, or improve anything: no furniture that is not there, no view
through the window that the window does not have, no room made larger than it
is.

This is not a style preference. A showcase that shows a space which does not
exist is deceptive advertising, and the buyer finds out at the viewing. The
prohibition is written into the space bible itself, in field 5, so it travels
into every prompt rather than living in someone's memory.

It is the same rule as the PENDING rule, applied to pixels instead of numbers:
do not present something invented as something verified.

## Open risks, carried into the pilot

| Risk | Where | Resolution |
|---|---|---|
| Bathroom mirror hallucinates reflected content | Shot 04 | PENDING [reject rate for mirrored surfaces] — framed to keep the mirror off-axis; if it still fails, the shot becomes a static hold |
| Tiled floors bend during lateral movement | Shots 01, 02 | Movement kept slow; PENDING [safe duration for interiors] |
| Balcony shot mixes interior and exterior exposure | Shot 05 | The one shot where the frozen light is hardest to hold; generated second, right after the pilot |

## Pilot shot

**Shot 01** — the living room, the widest interior, tiled floor, straight lines
in every direction.

It is the shot most likely to expose geometry drift, and it is the shot a viewer
sees first. If the engine holds this one, the rest of the interiors are easier.
If it does not, nothing after it was going to work either.
