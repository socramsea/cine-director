# Changelog

All notable changes to this project are documented here.
Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [0.4.0] — 2026-08-15

### Added

- `examples/` — two complete dry-run packages, published in full so the output
  can be read before installing:
  - **music-video-neon-tide** — recurring character, 12 shots, 8 with lipsync:
    brief, character bible, decupage, per-shot prompts, ffmpeg audio-cut plan
    (with a generation script and a verification step), cost estimate.
  - **property-showcase-vila-mar** — no character: brief, space bible,
    decupage, per-shot prompts, cost estimate. Documents the line a property
    showcase must not cross.
  Both projects are fictional; every `PENDING` marker is a real open question.
- The examples are **verified in CI**. `scripts/validate-skill.mjs` now
  recomputes each shot table against its declared master duration, checks that
  every shot type names a real card in `references/shots/`, and fails on any
  cost row stating a price without a `PENDING` marker — the PENDING rule
  enforced mechanically rather than by review.

## [0.3.0] — 2026-08-15

### Fixed

- **The skill could not be installed at all.** `SKILL.md` frontmatter used an
  unquoted plain scalar containing `": "`, which strict YAML parsers reject
  (`Nested mappings are not allowed in compact mappings`). Claude Code's lenient
  parser accepted it, so the break was invisible locally while
  `npx skills add socramsea/cine-director` — the install command in the README —
  reported `No valid skills found` and installed nothing. `description` and
  `when_to_use` are now block scalars, which are immune to colons and quotes in
  any parser.

### Added

- `scripts/validate-skill.mjs` — zero-dependency validator enforcing the
  portable YAML subset, the 1,536-character skill-listing cap, the existence of
  every referenced file, and that every shot card is reachable from `SKILL.md`.
- CI (`.github/workflows/validate.yml`) running the validator plus a real
  install through the `skills` CLI on Linux and macOS, so a frontmatter change
  that breaks installation fails the build instead of reaching users.
- `CONTRIBUTING.md`, this changelog, and troubleshooting, requirements, and
  uninstall sections in both READMEs.

### Changed

- English is now the canonical language for `SKILL.md`, the references, and the
  shot cards. The Portuguese text is preserved as a mirror at
  `pt-BR/SKILL.pt-BR.md`, and `README_PT.md` is at full parity with `README.md`.
- `when_to_use` moved out of `description` into its own field, so the trigger
  phrases stay intact when the skill listing is truncated.
- Reference files renamed to English: `decupagem-template.md` →
  `decupage-template.md`, `plano-sequencia.md` → `sequence-shot.md`,
  `showcase-imovel.md` → `property-showcase.md`.

## [0.2.0]

### Added

- `showcase-imovel` shot card and the space bible (5 fields) for projects
  without a character, from the gaps found in the DZ0417 dry-run.

## [0.1.0]

### Added

- Initial dry-run skeleton: decupage template, character bible, production
  pipeline, three shot cards, and the PENDING rule.
