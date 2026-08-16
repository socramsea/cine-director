# cine-director

**Transforme seu agente de código em diretor de cinema para vídeo generativo.**

[![Validate](https://github.com/socramsea/cine-director/actions/workflows/validate.yml/badge.svg)](https://github.com/socramsea/cine-director/actions/workflows/validate.yml)
[![Licença: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](./LICENSE)

Ferramentas de vídeo por IA geram clipes. O `cine-director` dirige filmes:
transforma uma música, um produto ou uma ideia num pacote completo de
pré-produção cinematográfica — decupagem plano a plano, prompt de geração por
plano, bíblia de consistência de personagem, plano de cortes de áudio ffmpeg e
estimativa de custo honesta — **antes de gastar um crédito de API**.

Construído a partir de pipeline validado em produção real (clipe musical
completo com lipsync por plano), não de teoria.

[Read in English →](./README.md)

---

## Por que dry-run primeiro

Vídeo generativo cobra por segundo e é não-determinístico. Os erros caros
acontecem na pré-produção: plano que não sincroniza, personagem que muda de
rosto entre takes, áudio cortado no meio da sílaba. Este skill antecipa todo
esse pensamento a custo zero. Você só gera quando o plano está travado.

## Instalação

```bash
npx skills add socramsea/cine-director
```

Instala nos agentes que você tiver — Claude Code, Codex, Cursor, Amp, Cline,
Antigravity e mais 14 são suportados pelo instalador.

<details>
<summary>Instalação manual (sem instalador)</summary>

```bash
git clone https://github.com/socramsea/cine-director.git
mkdir -p ~/.claude/skills
ln -s "$(pwd)/cine-director" ~/.claude/skills/cine-director
```

Para um projeto só, em vez da máquina inteira, faça o symlink dentro de
`.claude/skills/` do projeto. Para o Claude.ai, zipe o repositório e suba em
Configurações → Capacidades → Skills.

</details>

Confirme que carregou:

```bash
npx skills list
```

## Uso

Descreva o que você quer. O skill ativa sozinho — não precisa de comando.

> Use o cine-director para planejar um clipe pra essa música.

> Faça o storyboard de um showcase cinematográfico de 30s deste apartamento.

> Quanto custaria um brandfilm de 60 segundos gerado por IA?

## O que você recebe (dry-run, grátis)

| Entregável | O que é |
|---|---|
| **Decupagem** | Tabela numerada de planos: duração, enquadramento, uma ação por plano, câmera, transição |
| **Prompts de geração** | Um prompt pronto por plano, com a bíblia de personagem embutida |
| **Bíblia de personagem** | O bloco canônico congelado que mantém seu personagem sendo a mesma pessoa em todos os planos |
| **Plano de cortes de áudio** | Comandos ffmpeg, um segmento por plano com lipsync, timestamps ao milissegundo |
| **Estimativa de custo** | Segundos gerados × preço vigente do provedor, com fonte e data de cada número |

O dry-run não custa nada e termina com o pacote salvo em arquivos. Só então o
skill pergunta se você quer gerar.

## Veja antes de instalar

Dois pacotes de dry-run publicados como página, um por tipo de projeto:

- **[Neon Tide →](https://socramsea.github.io/cine-director/)** — clipe musical:
  os 92 segundos desenhados em escala, a bíblia de personagem congelada, doze
  planos, lipsync em oito deles.
- **[Vila Mar 402 →](https://socramsea.github.io/cine-director/vila-mar.html)**
  — showcase de imóvel: sem personagem, bíblia de espaço no lugar, seis planos
  verticais, e o limite que um vídeo imobiliário não pode cruzar.

Os mesmos pacotes na íntegra, em arquivos, em [`examples/`](./examples/):

| Exemplo | O que mostra |
|---|---|
| [Neon Tide](./examples/music-video-neon-tide/) | Clipe musical: personagem recorrente, 12 planos, lipsync por plano, bíblia de personagem, plano de cortes ffmpeg |
| [Vila Mar 402](./examples/property-showcase-vila-mar/) | Showcase de imóvel: sem personagem, bíblia de espaço, 6 planos verticais, geometria como protagonista |

Os dois projetos são fictícios; o método não. Comece por um
[brief](./examples/music-video-neon-tide/00-brief.md) para ver como as decisões
são tomadas, ou vá direto a uma [estimativa de
custo](./examples/music-video-neon-tide/05-cost-estimate.md) para ver como a
aritmética é apresentada sem inventar preço.

Esses exemplos são **verificados no CI**: o validador recalcula cada tabela de
planos contra a duração declarada do master, confere se cada plano cita um card
real e derruba o build em qualquer preço afirmado sem fonte. Documentação que
não apodrece em silêncio.

## Requisitos

| Para | Você precisa de |
|---|---|
| Dry-run (o padrão) | Um agente que suporte skills. Mais nada. Sem chave de API, sem ffmpeg. |
| Rodar os cortes de áudio | [ffmpeg](https://ffmpeg.org/download.html) no PATH |
| Gerar o footage (opcional) | Suas próprias chaves de image-to-video e lipsync |

O skill nunca gasta dinheiro por você e nunca pede suas chaves. A camada de
execução roda comandos que você aprova, com credenciais que já são suas.

## Regra fundacional: REGRA PENDENTE

Nenhum parâmetro entra num entregável sem fonte declarada. Valor não validado é
marcado `PENDENTE` — nunca um número plausível inventado.

Isso é proposital e você vai ver no output. Uma estimativa que diz
`PENDENTE [consultar preço da fal.ai hoje]` é mais útil que um número errado
dito com confiança, porque preço de vídeo generativo muda sem aviso e estimativa
errada é como projeto estoura orçamento.

## Estrutura do repositório

```
SKILL.md                        o skill em si — o que o agente lê
references/
  pipeline.md                   o pipeline de produção em 6 etapas
  character-bible.md            bíblia de personagem (7 campos) + bíblia de espaço (5 campos)
  shots/
    master-performance.md       plano de performance do artista
    close-up-lipsync.md         close frontal para sincronia labial
    sequence-shot.md            movimento contínuo de câmera
    property-showcase.md        imóvel / arquitetura, sem personagem
template/
  decupage-template.md          a tabela de planos para preencher
pt-BR/                          espelho em português do SKILL.md
scripts/validate-skill.mjs      validador — rode antes de cada commit
```

Cada card de plano documenta um tipo validado: intenção, estrutura do prompt,
parâmetros com fonte, erros conhecidos e critério de aceite.

## Solução de problemas

**`No valid skills found` na instalação**
Seu frontmatter do `SKILL.md` não está parseando. Rode
`node scripts/validate-skill.mjs` — ele aponta a linha exata. A causa comum é um
valor sem aspas contendo `: `, que parsers tolerantes aceitam e os estritos
rejeitam.

**O skill não ativa sozinho**
Cite o entregável, não a ferramenta: "planeja os planos desse clipe" funciona
melhor que "faz um vídeo". Você também pode chamar direto com `/cine-director`
no Claude Code.

**O output está cheio de `PENDENTE`**
Funcionando como projetado — veja a REGRA PENDENTE acima. Preencha com os dados
das suas produções e as estimativas ficam mais afiadas. Eles são a fronteira
honesta do que foi de fato validado.

**Personagem muda de rosto entre planos**
A bíblia foi parafraseada em algum lugar. Ela tem que ser colada idêntica em
todo prompt. Veja `references/character-bible.md`.

## Desinstalar

```bash
npx skills remove cine-director
# instalação manual:
rm ~/.claude/skills/cine-director
```

## Contribuindo

Cards de plano vindos de produção real são a contribuição mais valiosa — um card
que documenta como algo quebrou de verdade economiza créditos de API de outra
pessoa. Veja [CONTRIBUTING.md](./CONTRIBUTING.md).

## Licença

[Apache 2.0](./LICENSE) © Forja Criativa

---

Construído pela **Forja Criativa** — produção cinematográfica com IA, RJ.
Produção completa sob encomenda: [forjacriativa.ia.br](https://forjacriativa.ia.br)
