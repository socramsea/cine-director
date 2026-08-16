# cine-director

**Turn your coding agent into a film director for generative AI video.**

[![Validate](https://github.com/socramsea/cine-director/actions/workflows/validate.yml/badge.svg)](https://github.com/socramsea/cine-director/actions/workflows/validate.yml)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](./LICENSE)

Most AI video tools generate clips. `cine-director` directs films: it turns a
song, a product, or an idea into a complete cinematic pre-production package —
shot-by-shot decupage, per-shot generation prompts, a character consistency
bible, an ffmpeg audio-cut plan, and an honest cost estimate — **before a single
API credit is spent**.

Built from a pipeline validated in real production (a full music video with
per-shot lipsync), not from theory.

[Leia em português →](./README_PT.md)

---

## Why dry-run first

Generative video is priced per second and non-deterministic. The expensive
mistakes happen in pre-production: shots that can't lipsync, characters that
drift between takes, audio cut mid-syllable. This skill front-loads all of that
thinking at zero cost. You only generate when the plan is locked.

## Install

```bash
npx skills add socramsea/cine-director
```

That installs to whichever agents you have — Claude Code, Codex, Cursor, Amp,
Cline, Antigravity and 14 more are supported by the installer.

<details>
<summary>Manual install (no installer)</summary>

```bash
git clone https://github.com/socramsea/cine-director.git
mkdir -p ~/.claude/skills
ln -s "$(pwd)/cine-director" ~/.claude/skills/cine-director
```

For a single project instead of your whole machine, symlink into
`.claude/skills/` inside the project. For Claude.ai, zip the repo and upload it
under Settings → Capabilities → Skills.

</details>

Verify it loaded:

```bash
npx skills list
```

## Use

Just describe what you want. The skill activates on its own — no slash command
required.

> Use cine-director to plan a music video for this track.

> Storyboard a 30s cinematic showcase of this apartment.

> How much would a 60-second AI-generated brand film cost?

## What you get (dry-run, free)

| Deliverable | What it is |
|---|---|
| **Decupage** | Numbered shot table: duration, framing, one action per shot, camera, transition |
| **Generation prompts** | One ready-to-paste prompt per shot, character bible embedded |
| **Character bible** | The frozen canonical block that keeps your character the same person across every shot |
| **Audio-cut plan** | ffmpeg commands, one segment per lipsync shot, timestamps to the millisecond |
| **Cost estimate** | Generated seconds × the provider's current price, with the source and date for every figure |

The dry-run costs nothing and ends with the package saved to files. Only then
does the skill ask whether you want to generate.

## See it before you install

Two complete packages are published in [`examples/`](./examples/):

| Example | What it shows |
|---|---|
| [Neon Tide](./examples/music-video-neon-tide/) | Music video: recurring character, 12 shots, per-shot lipsync, character bible, ffmpeg cut plan |
| [Vila Mar 402](./examples/property-showcase-vila-mar/) | Property showcase: no character, space bible, 6 vertical shots, geometry as the subject |

Both projects are fictional; the method is not. Start with a
[brief](./examples/music-video-neon-tide/00-brief.md) to see how the decisions
get made, or jump to a [cost
estimate](./examples/music-video-neon-tide/05-cost-estimate.md) to see how the
arithmetic is presented without inventing a price.

These examples are **verified in CI**: the validator recomputes every shot table
against its declared master duration, checks that each shot names a real card,
and fails the build on any price stated without a source. Documentation that
cannot go stale silently.

## Requirements

| For | You need |
|---|---|
| Dry-run (the default) | An agent that supports skills. Nothing else. No API key, no ffmpeg. |
| Running the audio cuts | [ffmpeg](https://ffmpeg.org/download.html) on your PATH |
| Generating footage (optional) | Your own image-to-video and lipsync API keys |

The skill never spends money on your behalf and never asks for your keys. The
execution layer runs commands you approve, with credentials you already have.

## Founding rule: the PENDING rule

No parameter enters a deliverable without a declared source. Unvalidated values
are marked `PENDING` explicitly — never a plausible invented number.

This is deliberate and you will see it in the output. A cost estimate that says
`PENDING [check fal.ai pricing today]` is more useful than a confident wrong
number, because generative-video prices change without notice and a wrong
estimate is how projects go over budget.

## Repository layout

```
SKILL.md                        the skill itself — what the agent reads
references/
  pipeline.md                   the 6-step production pipeline, end to end
  character-bible.md            character bible (7 fields) + space bible (5 fields)
  shots/
    master-performance.md       artist performance shot
    close-up-lipsync.md         frontal close-up for lip sync
    sequence-shot.md            continuous camera movement
    property-showcase.md        real estate / architecture, no character
template/
  decupage-template.md          the shot table to fill in
pt-BR/                          Portuguese mirror of SKILL.md
scripts/validate-skill.mjs      validator — run before every commit
```

Each shot card documents one validated shot type: intent, prompt structure,
parameters with sources, known failures, and acceptance criteria.

## Troubleshooting

**`No valid skills found` when installing**
Your `SKILL.md` frontmatter isn't parsing. Run `node scripts/validate-skill.mjs`
— it reports the exact line. The usual cause is an unquoted value containing
`: `, which lenient parsers accept and strict ones reject.

**The skill doesn't activate on its own**
Name the deliverable rather than the tool: "plan the shots for this music video"
works better than "make a video". You can also invoke it directly with
`/cine-director` in Claude Code.

**The output is full of `PENDING`**
Working as intended — see the PENDING rule above. Fill those in from your own
production runs and the estimates get sharper. They are the honest edges of what
has actually been validated.

**Character looks different between shots**
The bible was paraphrased somewhere. It has to be pasted in byte-identical on
every prompt. See `references/character-bible.md`.

## Uninstall

```bash
npx skills remove cine-director
# manual install:
rm ~/.claude/skills/cine-director
```

## Contributing

Shot cards from real production runs are the most valuable contribution — a card
that documents how something actually broke saves someone else the API credits.
See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

[Apache 2.0](./LICENSE) © Forja Criativa

---

Built by **Forja Criativa** — cinematic AI production, Rio de Janeiro.
Full production service: [forjacriativa.ia.br](https://forjacriativa.ia.br)
