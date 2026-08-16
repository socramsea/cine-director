# Pipeline de produção — vídeo generativo com lipsync

Fluxo validado em produção real (clipe musical, decupagem de 18 planos).
Marcações `PENDENTE [fonte]` indicam valores que devem ser preenchidos
pelo mantenedor com dados de produção — nunca estimados pelo agente.

## Visão geral

```
[1] Pré-produção (dry-run)          custo: R$ 0
    música/ideia → decupagem → bíblia de personagem → prompts → plano de áudio
                    ↓
[2] Imagem-referência por plano      custo: baixo
    imagem canônica do personagem/cena, uma por plano
                    ↓
[3] Image-to-video                   custo: por segundo gerado
    motor validado: Grok Imagine Video (versão em uso: 1.5)
                    ↓
[4] Cortes de áudio (ffmpeg)         custo: R$ 0, local
    um segmento de áudio por plano com vocal, timestamps da decupagem
                    ↓
[5] Lipsync por plano                custo: por segundo processado
    motor validado: Sync Lipsync v2 (via fal.ai)
                    ↓
[6] Montagem final (ffmpeg/NLE)      custo: R$ 0, local
```

## Etapa 1 — Pré-produção (o produto principal)

Ver SKILL.md (modo dry-run) e `../template/decupagem-template.md`.
Regra de ouro: a decupagem trava ANTES de gerar qualquer frame.
Mudar plano depois de gerado = pagar de novo.

## Etapa 2 — Imagem-referência

- Toda cena parte de uma imagem canônica derivada da bíblia de personagem
  (`character-bible.md`). Nunca gerar vídeo de prompt puro quando há
  personagem recorrente: a consistência entre planos vem da imagem, não
  do texto.
- Critério de aceite da imagem antes de animar: identidade do personagem
  conferida contra a bíblia item a item (rosto, óculos, figurino, luz).
  Imagem reprovada não avança — regerar é mais barato que animar errado.

## Etapa 3 — Image-to-video

- Duração por take: PENDENTE [preencher: duração máxima confiável
  observada em produção antes de degradar]
- Estrutura de prompt que funcionou: ver cards em `shots/`
- Erro conhecido: prompts com múltiplas ações simultâneas degradam a
  fidelidade do personagem. Uma ação principal por plano.

## Etapa 4 — Cortes de áudio (ffmpeg)

Um arquivo de áudio por plano com lipsync, cortado do master:

```bash
# padrão validado — corte sem reencode quando possível
ffmpeg -i master.wav -ss <início> -to <fim> -c copy plano_NN.wav
# se o corte precisar de precisão de frame (c copy corta em keyframe):
ffmpeg -i master.wav -ss <início> -to <fim> plano_NN.wav
```

- Timestamps vêm da coluna "áudio" da decupagem — a decupagem é a
  fonte única de verdade de tempo.
- Margem de segurança nos cortes: PENDENTE [preencher: padding em ms
  usado em produção antes/depois do vocal]

## Etapa 5 — Lipsync

- Entrada: vídeo do plano (etapa 3) + segmento de áudio (etapa 4)
- Motor validado: Sync Lipsync v2 via fal.ai
- Parâmetros de produção: PENDENTE [preencher: config validada]
- Erro conhecido: PENDENTE [preencher: falhas observadas — ângulos de
  rosto, oclusão, planos muito abertos etc.]
- Custo: consultar preço vigente em fal.ai/models antes de estimar.
  Nunca usar preço decorado — muda sem aviso.

## Etapa 6 — Montagem

Concat ffmpeg na ordem da decupagem; áudio master por cima da timeline
de vídeo (os áudios de lipsync serviram para sincronia, o master final
garante qualidade contínua):

```bash
ffmpeg -f concat -safe 0 -i lista.txt -i master.wav \
  -map 0:v -map 1:a -c:v copy -shortest final.mp4
```

## Ordem de execução inegociável

1. Dry-run completo aprovado
2. UM plano-piloto gerado de ponta a ponta (etapas 2→5)
3. Piloto aprovado pelo usuário → produção em lote
4. Nunca gerar em lote sem piloto: erro sistemático em lote = custo × N
