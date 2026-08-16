---
name: cine-director
description: >-
  Film-director capability for generative AI video — music videos, brand films,
  real-estate showcases, narrative clips. Produces a complete cinematic
  pre-production package (shot-by-shot decupage, per-shot generation prompts,
  character consistency bible, ffmpeg audio-cut plan, and an API cost estimate)
  at zero cost in dry-run mode, which is the default. An optional execution
  layer generates the footage with the user's own API keys, via image-to-video
  plus lipsync. Answers to storyboarding, shot lists, lipsync and character
  consistency, and to the Portuguese terms decupagem, clipe musical and vídeo
  gerado por IA.
when_to_use: >-
  Use when the user wants to plan, storyboard, direct, or produce an
  AI-generated video; asks what a generative video would cost before generating
  it; needs character consistency across shots, lipsync, or an audio-cut plan;
  or asks for a decupagem, a bíblia de personagem, or a clipe.
license: Apache-2.0
---

# cine-director: cinematic direction for generative video

A **cinematic pre-production** capability for AI-generated video. The goal is
not to "generate video" — it is to **direct**: to turn a song, a product, or an
idea into a professional shot breakdown that any generative engine
(image-to-video + lipsync) can execute consistently.

Reference pipeline validated in real production (a complete music video):
reference image → image-to-video → ffmpeg audio cuts → per-shot lipsync →
final edit. The shot cards document what worked and what broke.

> **Terminology.** *Decupage* (PT-BR: *decupagem*) is the shot-by-shot
> breakdown of a scene — the numbered table of every shot with its duration,
> framing, action, and camera. It is this skill's central artifact.

## Founding rule: the PENDING rule

No parameter, coefficient, or technical claim enters a deliverable without a
declared source. If a value has not been validated in production, the output
marks it `PENDING` explicitly — never a plausible invented number. This binds
the agent using this skill: **do not estimate API costs without consulting the
provider's current price table; do not assert model duration or resolution
limits without checking current documentation.**

When you cannot source a value, write `PENDING [what to fill in]`. That is a
correct answer, not a failure.

## Two modes — dry-run is the default

### 1. Dry-run (default, zero cost)

Delivers the complete pre-production package WITHOUT spending a single API
credit:

- **Decupage** shot by shot (table: number, duration, framing, action, camera,
  transition) — use `template/decupage-template.md`
- **Generation prompt** ready for each shot (image-to-video), with the
  character bible embedded for consistency
- **Character bible** — read `references/character-bible.md`
- **Audio-cut plan** — ready-to-run ffmpeg commands, one segment per shot with
  lipsync, timestamps derived from the lyrics/beat
- **Cost estimate** — generated seconds × the provider's current price
  (check the current price before estimating; never use a memorized figure)

The dry-run ends with the package saved to files. Only then ask whether the
user wants to run the generation.

### 2. Execution (optional, the user's own keys)

Read `references/pipeline.md` in full before generating anything.
Non-negotiable order: generate a single pilot shot → validate it with the user
→ only then produce the batch. Never generate every shot at once without an
approved pilot.

## Flow when invoked

1. Ask (or infer from context) the project type: music video / brand film /
   real estate / narrative. Each type has a dedicated shot card in
   `references/shots/`.
2. Collect the minimum inputs: audio (for a music video), visual references,
   description of the character or product.
3. Run the full dry-run. Do not pause for confirmation at every step — deliver
   the whole package and review against something concrete.
4. Present the estimated cost and ask whether to execute.

## Shot cards

Each card in `references/shots/` documents one validated shot type: intent,
prompt structure, parameters with sources, known failures ("this is how it
broke"), and acceptance criteria. Read the whole card before writing the prompt
for the corresponding shot.

| Card | When to use |
|---|---|
| `references/shots/master-performance.md` | Artist performance shot (full or medium body) |
| `references/shots/close-up-lipsync.md` | Close-up with lip sync — the most critical shot |
| `references/shots/sequence-shot.md` | Continuous camera movement in a generative scene |
| `references/shots/property-showcase.md` | Real-estate/architecture showcase — no character, the space is the product |

## What this skill does NOT do

- It does not replace UI motion graphics (for a digital-product promo with real
  screenshots, use a Remotion-style skill such as video-shotcraft)
- It does not generate video without the user explicitly approving the cost
- It does not invent parameters: `PENDING` is a valid answer

---
Built by Forja Criativa (forjacriativa.ia.br) from a production-validated
pipeline. Full production service available at the site.

Portuguese version of this document: `pt-BR/SKILL.pt-BR.md`
