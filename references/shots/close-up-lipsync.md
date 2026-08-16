---
name: close-up-lipsync
uma-linha: close frontal para sincronia labial — o plano mais crítico e mais caro de errar
aplicação: qualquer plano onde o personagem canta/fala para câmera
status: validado em produção (pipeline Grok Imagine → ffmpeg → Sync Lipsync v2)
---

## Intenção
É o plano que vende o clipe: o espectador julga o realismo inteiro pela
boca. Todo o pipeline existe para este plano dar certo.

## Pré-requisitos (nesta ordem)
1. Corte de áudio do plano pronto e conferido (timestamps da decupagem)
2. Vídeo base gerado com rosto frontal ou 3/4, bem iluminado
3. Só então o lipsync

## Estrutura do prompt (vídeo base)
[BÍBLIA íntegra] + "canta para a câmera com emoção contida, movimento
de cabeça sutil" + "close-up frontal, lente PENDENTE [preencher se
padronizado], profundidade de campo rasa"

## Parâmetros
| Parâmetro | Valor | Fonte |
|---|---|---|
| Ângulo máximo do rosto | PENDENTE | testar: frontal vs 3/4 vs perfil |
| Duração do segmento de lipsync | = duração do plano na decupagem | decupagem é fonte única de tempo |
| Config Sync Lipsync v2 | PENDENTE | config validada em produção |

## Erros conhecidos
- Gerar o vídeo base COM a boca já se movendo (personagem "cantando" no
  prompt do vídeo) e aplicar lipsync por cima: PENDENTE [confirmar em
  produção se boca neutra ou cantando dá melhor resultado no v2].
- Barba cheia: verificar no piloto se o motor de lipsync trata bem a
  região da boca com barba — validar antes do lote.
- Corte de áudio começando no meio de uma sílaba → primeiro visema
  errado e perceptível. Cortar em respiração/pausa.

## Critério de aceite
Sincronia frame-exata nas plosivas (p, b, m); identidade preservada
(o lipsync não pode "trocar o rosto"); transição limpa nos frames de
entrada/saída do plano.
