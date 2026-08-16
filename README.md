# cine-director

**Turn Claude Code into a film director for generative AI video.**

Most AI video tools generate clips. `cine-director` directs films: it turns
a song, a product, or an idea into a complete cinematic pre-production
package — shot-by-shot decupage, per-shot generation prompts, a character
consistency bible, an ffmpeg audio-cut plan, and an honest cost estimate —
**before a single API credit is spent**.

Built from a pipeline validated in real production (a full music video with
per-shot lipsync), not from theory.

## Why dry-run first

Generative video is priced per second and non-deterministic. The expensive
mistakes happen in pre-production: shots that can't lipsync, characters that
drift between takes, audio cut mid-syllable. This skill front-loads all of
that thinking at zero cost. You only generate when the plan is locked.

## Install

```bash
npx skills add socramsea/cine-director
# or
git clone https://github.com/socramsea/cine-director.git
ln -s "$(pwd)/cine-director" ~/.claude/skills/cine-director
```

## Use

> Use cine-director to plan a music video for this track.
> Use cine-director to storyboard a 30s cinematic showcase of this apartment.
> How much would a 60-second AI-generated brand film cost?

## What you get (dry-run, free)

- Shot table (decupage) with per-shot duration, framing, action, camera
- One generation-ready prompt per shot, character bible embedded
- ffmpeg commands for per-shot audio cuts (lipsync-ready)
- Cost estimate with source and date for every price — no invented numbers

## Founding rule: REGRA PENDENTE

No parameter enters a deliverable without a declared source. Unvalidated
values are marked `PENDENTE` explicitly — never a plausible invented number.

## Execution layer (optional)

Bring your own API keys (image-to-video + lipsync). The skill enforces a
pilot-shot-first workflow: one shot end-to-end, approved, then batch.

---

Built by **Forja Criativa** — cinematic AI production, Rio de Janeiro.
Full production service: [forjacriativa.ia.br](https://forjacriativa.ia.br)

Leia em [Português](README_PT.md)
