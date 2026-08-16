---
name: plano-sequencia
uma-linha: movimento contínuo de câmera em cena generativa — impacto cinematográfico
aplicação: aberturas, transições de ato, showcase de ambiente (ex.: imóvel)
status: em validação — usar apenas após piloto aprovado
---

## Intenção
O plano que separa "vídeo de IA" de "cinema": a câmera viaja pelo espaço
e o mundo se sustenta. Alto impacto, alto risco de artefato.

## Estrutura do prompt
[BÍBLIA/descrição de cena] + movimento de câmera ÚNICO e nomeado com
vocabulário de cinema ("slow dolly-in", "crane rise", "lateral tracking
shot") + velocidade ("slow", "gentle") — modelos respondem melhor a
termos de cinematografia do que a descrições literais de trajetória.

## Parâmetros
| Parâmetro | Valor | Fonte |
|---|---|---|
| Duração máxima antes de degradar | PENDENTE | testar por motor/versão |
| Movimentos por plano | 1 | regra geral do pipeline: uma intenção por plano |
| Velocidade | lenta | movimentos rápidos multiplicam artefatos de geometria |

## Erros conhecidos
- Combinar movimento de câmera + ação de personagem complexa → escolher
  um como protagonista do plano.
- Interiores com linhas retas (portas, janelas, azulejos) entortam em
  movimentos longos — para imóveis, preferir takes curtos concatenados
  a um sequence shot longo. PENDENTE [validar duração segura em interiores].

## Critério de aceite
Geometria do cenário estável do primeiro ao último frame; sem "morphing"
de objetos; velocidade constante (aceleração não intencional = reprovar).
