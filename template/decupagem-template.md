# Template de decupagem — vídeo generativo

Fonte única de verdade do projeto. Trava ANTES de gerar qualquer frame.
Estrutura validada em produção real (clipe musical, 18 planos).

## Cabeçalho do projeto

| Campo | Valor |
|---|---|
| Projeto | |
| Duração alvo | |
| Música / áudio master | (arquivo + duração exata) |
| Bíblia de personagem | (link para o bloco canônico congelado) |
| Motor de vídeo | (nome + versão — versão importa) |
| Motor de lipsync | (nome + versão) |
| Data de travamento | |

## Tabela de planos

| # | Dur. (s) | Áudio (in–out) | Tipo de plano (card) | Enquadramento | Ação (UMA) | Câmera | Lipsync? | Transição p/ próximo |
|---|---|---|---|---|---|---|---|---|
| 01 | | 00:00.000–00:00.000 | master-performance | | | | sim/não | corte/fusão |
| 02 | | | | | | | | |
| ... | | | | | | | | |

Regras da tabela:
- Coluna "Áudio" com precisão de milissegundo — ela gera os comandos
  ffmpeg automaticamente. Cortar em respiração/pausa, nunca no meio
  de sílaba.
- Coluna "Ação": UMA ação principal. Duas ações = dois planos.
- Coluna "Tipo": referencia um card em references/shots/ — o prompt
  do plano é escrito lendo o card correspondente.
- Soma das durações = duração do master (conferir antes de travar).

## Bloco de custos (preencher no dry-run)

| Item | Qtd | Unidade | Preço unit. (fonte + data) | Total |
|---|---|---|---|---|
| Geração de vídeo | Σ segundos | s | consultar provedor HOJE | |
| Lipsync | Σ segundos c/ lipsync | s | consultar provedor HOJE | |
| Margem p/ regeração (piloto + reprovas) | ×1.5 sobre o total | | | |

Nunca apresentar custo sem a coluna "fonte + data" preenchida.

## Aceite

- [ ] Decupagem travada em ____ /____ /____
- [ ] Piloto (plano ___) aprovado antes do lote
- [ ] Aceite final documentado por escrito
