# Contributing to cine-director

The most valuable contribution here is not code. It is a **shot card from a real
production run** — a card that documents how something actually broke saves the
next person the API credits they would have spent discovering it.

## The one rule that matters: the PENDING rule

No parameter, coefficient, or technical claim enters this repository without a
declared source.

If you validated a value in a real production run, write it down with where it
came from. If you did not, write `PENDING [what to fill in]`. A pull request
that replaces a `PENDING` with a plausible-sounding number and no source will be
rejected — that is the exact failure mode this skill exists to prevent.

```markdown
| Take duration | 6s | production: DZ0417 pilot, degradation visible past 6s |
| Take duration | PENDING | measure on the next pilot |
```

Both of those are acceptable. `| Take duration | ~6s |` is not.

## Before you open a pull request

```bash
node scripts/validate-skill.mjs
```

This must exit 0. It checks that the frontmatter parses in the portable YAML
subset every agent platform agrees on, that the skill listing fits its character
budget, that every file referenced by a document actually exists, and that every
shot card is reachable from `SKILL.md`. CI runs the same script plus a real
install through the `skills` CLI.

## Adding a shot card

Copy the structure of an existing card in `references/shots/`. Every card needs:

| Section | What goes in it |
|---|---|
| Frontmatter | `name`, `one-liner`, `applies-to`, `status` |
| Intent | Why this shot exists and what it carries in the edit |
| Prompt structure | The literal shape of the prompt, with `[BIBLE]` in place |
| Parameters | A table with a **Source** column. No source, no value. |
| Known failures | How it broke. This is the part people come back for. |
| Acceptance criteria | How you decide the shot passed |

Set `status` honestly: `validated in production` means you shipped it,
`under validation` means you have run it but not enough to generalise.

Then add the card to the table in `SKILL.md` — the validator fails if you don't,
because an unlisted card is a card the agent will never open.

## Language

English is canonical. `SKILL.md`, the references, and the shot cards are written
in English so contributors anywhere can read and extend them.

Portuguese is mirrored, not primary: `pt-BR/SKILL.pt-BR.md` and `README_PT.md`.
If you change the English, update the mirror in the same pull request or say
explicitly in the PR that you couldn't, so a maintainer can pick it up.

## Style

- Keep prose lines under ~80 characters. Diffs on a wrapped paragraph should
  show the sentence that changed, not the whole block.
- No emoji in the skill files.
- Prefer the concrete failure over the general warning. "Straight lines bend
  during long movements" beats "be careful with camera motion".

## Commits and pull requests

Conventional commits (`fix:`, `feat:`, `docs:`, `chore:`). In the PR body, say
what you validated and how — the production run, the engine and version, the
number of shots. That context is what makes a card trustworthy to a stranger.

## Reporting a problem

Open an issue with the agent and version you're on, the exact command you ran,
and the full output. If the skill failed to install, include the output of
`node scripts/validate-skill.mjs`.
