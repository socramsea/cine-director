# Examples

Two complete dry-run packages, exactly as the skill produces them. Read these
before installing if you want to know what you get.

Both projects are **fictional** — invented so the package could be published in
full. The method, the structure, and the discipline are the real ones.

| Example | What it demonstrates |
|---|---|
| [music-video-neon-tide](./music-video-neon-tide/) | The flagship case: recurring character, per-shot lipsync, 12 shots, character bible, audio-cut plan |
| [property-showcase-vila-mar](./property-showcase-vila-mar/) | No character: space bible, geometry as the subject, 6 shots, vertical format |

## How to read a package

A dry-run package is a set of files, in this order:

```
00-brief.md            what was asked, what was decided, what is still open
01-*-bible.md          the frozen canonical block, pasted into every prompt
02-decupage.md         the shot table — the single source of truth for time
03-shot-prompts.md     one ready-to-paste prompt per shot
04-audio-cuts.md       ffmpeg commands, one segment per lipsync shot
05-cost-estimate.md    seconds × price, with the arithmetic worked out
```

The property example has no `04-audio-cuts.md` — no character, no lipsync,
nothing to cut.

## Why the prices say PENDING

Every cost table here has the seconds fully calculated and the **unit price left
as a named variable**. That is not laziness, it is the [PENDING
rule](../README.md#founding-rule-the-pending-rule): generative-video pricing
changes without notice, and a number frozen into a document is a number that
will be wrong when you read it.

Substitute today's price into the formula and you get your estimate. A committed
number would only tell you what something cost on the day this file was written.

## These examples are tested

`scripts/validate-skill.mjs` parses every decupage in this directory and checks
that the shot durations sum to the declared master duration, that every shot
type names a real card in `references/shots/`, and that no cost row states a
price without a source. CI runs it on every push.

An example that drifts out of sync with the templates fails the build. That is
the point — documentation that cannot go stale silently.
