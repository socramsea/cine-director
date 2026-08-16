# cine-director: direção cinematográfica para vídeo generativo

> Este é o espelho em português do `SKILL.md`. O arquivo canônico — o que os
> instaladores leem e o que deve ser editado primeiro — é o `SKILL.md` na raiz,
> em inglês. Se os dois divergirem, o `SKILL.md` vence.

Uma capacidade de **pré-produção cinematográfica** para vídeo gerado por IA.
O foco não é "gerar vídeo" — é **dirigir**: transformar uma música, um produto
ou uma ideia numa decupagem profissional que qualquer motor generativo
(image-to-video + lipsync) consegue executar de forma consistente.

Pipeline de referência validado em produção real (clipe musical completo):
imagem-referência → image-to-video → cortes de áudio ffmpeg → lipsync por plano
→ montagem final. Os cards documentam o que funcionou e o que quebrou.

## Regra fundacional: REGRA PENDENTE

Nenhum parâmetro, coeficiente ou afirmação técnica entra num entregável sem
fonte declarada. Se um valor não foi validado em produção, o output marca
`PENDENTE` explicitamente — nunca um número plausível inventado. Isso vale
para o agente usando este skill: **não estime custos de API sem consultar a
tabela de preços atual do provedor; não afirme limites de duração/resolução
de modelos sem verificar a documentação vigente.**

Quando não houver fonte, escreva `PENDENTE [o que preencher]`. Isso é uma
resposta correta, não uma falha.

## Dois modos — dry-run é o padrão

### 1. Dry-run (padrão, custo zero)

Entrega o pacote completo de pré-produção SEM gastar um crédito de API:

- **Decupagem** plano a plano (tabela: nº, duração, enquadramento, ação,
  câmera, transição) — usar `template/decupage-template.md`
- **Prompt de geração** pronto para cada plano (image-to-video), com a
  bíblia de personagem embutida para consistência
- **Bíblia de personagem** — ler `references/character-bible.md`
- **Plano de cortes de áudio** — comandos ffmpeg prontos, um segmento por
  plano com lipsync, timestamps calculados a partir da letra/beat
- **Estimativa de custo** — segundos gerados × preço vigente do provedor
  (verificar preço atual antes de estimar; nunca usar valor decorado)

O dry-run termina com o pacote salvo em arquivos. Só depois perguntar se o
usuário quer executar a geração.

### 2. Execução (opcional, chaves do usuário)

Ler `references/pipeline.md` na íntegra antes de gerar qualquer coisa.
Ordem inegociável: gerar plano de teste único → validar com o usuário →
só então produzir em lote. Nunca gerar os planos todos de uma vez sem
um plano-piloto aprovado.

## Fluxo ao ser invocado

1. Perguntar (ou inferir do contexto) o tipo de projeto: clipe musical /
   brandfilm / imóvel / narrativa. Cada tipo tem um card de plano dedicado
   em `references/shots/`.
2. Coletar insumos mínimos: áudio (para clipe), referências visuais,
   descrição do personagem ou produto.
3. Rodar o dry-run completo. Não pausar para confirmação a cada etapa —
   entregar o pacote inteiro e revisar em cima do concreto.
4. Apresentar custo estimado e perguntar se executa.

## Cards de plano (shot cards)

Cada card em `references/shots/` documenta um tipo de plano validado:
intenção, estrutura do prompt, parâmetros com fonte, erros conhecidos
("já quebrou assim"), e critério de aceite. Ler o card inteiro antes de
escrever o prompt do plano correspondente.

| Card | Quando usar |
|---|---|
| `references/shots/master-performance.md` | Plano de performance do artista (corpo inteiro/médio) |
| `references/shots/close-up-lipsync.md` | Close com sincronia labial — o plano mais crítico |
| `references/shots/sequence-shot.md` | Movimento contínuo de câmera em cena generativa |
| `references/shots/property-showcase.md` | Showcase de imóvel/arquitetura — sem personagem, o espaço é o produto |

## O que este skill NÃO faz

- Não substitui motion graphics de UI (para promo de produto digital com
  screenshots reais, use um skill de Remotion como video-shotcraft)
- Não gera vídeo sem aprovação explícita do custo pelo usuário
- Não inventa parâmetros: PENDENTE é resposta válida

---
Construído pela Forja Criativa (forjacriativa.ia.br) a partir de pipeline
validado em produção. Produção completa sob encomenda no site.
