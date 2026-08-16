---
name: showcase-imovel
uma-linha: plano de ambiente para showcase imobiliário — sem personagem, geometria é a protagonista
aplicação: imóveis, arquitetura, interiores; qualquer vídeo onde o espaço é o produto
status: em validação — derivado do dry-run DZ0417; PENDENTEs a preencher no piloto
---

## Intenção
No showcase de imóvel o comprador julga o vídeo por UMA coisa: se o espaço
parece real e habitável. Linha reta que entorta = imóvel que parece falso =
vídeo que trabalha contra a venda. A geometria é o rosto do personagem aqui.

## Diferença fundamental vs. planos com personagem
Não há bíblia de personagem — há **bíblia de espaço** (ver seção "Projetos
sem personagem" em character-bible.md): luz, paleta, hora do dia e estilo de
lente congelados para o imóvel inteiro. A consistência entre planos vem de
manter o MESMO ambiente de luz em todos os cômodos, mesmo que as fotos-fonte
tenham sido tiradas em horários diferentes.

## Insumo obrigatório
Foto real do cômodo como imagem-referência — nunca gerar interior de imóvel
real a partir de texto puro: o vídeo precisa corresponder ao imóvel anunciado
(questão ética e legal: showcase que mostra ambiente que não existe é
propaganda enganosa; ver "Limites" abaixo).

## Estrutura do prompt
[BÍBLIA DE ESPAÇO íntegra] + [câmera: UM movimento lento nomeado — "slow
dolly-in", "gentle lateral tracking"] + [proibições: "no people, no text,
no furniture changes"]

## Parâmetros
| Parâmetro | Valor | Fonte |
|---|---|---|
| Duração por take (interior) | PENDENTE | piloto DZ0417 — interiores degradam antes de exteriores |
| Duração por take (exterior/varanda/vista) | PENDENTE | piloto DZ0417 |
| Movimento | 1 por plano, lento | regra geral do pipeline |
| Aspect ratio | decisão de projeto (16:9 portfólio / 9:16 Reels-Stories) | custo dobra se gerar ambos — decidir ANTES de travar a decupagem |

## Erros conhecidos
- Linhas retas (portas, janelas, azulejos, rodapés) entortam em movimentos
  longos → takes curtos concatenados > sequence shot longo.
- Espelhos e vidros: reflexos alucinam conteúdo → enquadrar evitando
  espelho frontal, ou aceitar reprovação alta nesses planos. PENDENTE
  [taxa de reprovação observada no piloto].
- Mobília "derretendo" em pans rápidos → velocidade lenta é inegociável.

## Limites (inegociável)
O vídeo não pode adicionar, remover ou "melhorar" elementos do imóvel real
(mobília inexistente, vista falsa, cômodo ampliado). Gerar movimento sobre
o que a foto real mostra: sim. Inventar o que não existe: não — é o
equivalente imobiliário de inventar um coeficiente sem fonte.

## Critério de aceite
Geometria estável do primeiro ao último frame; fidelidade à foto-fonte
conferida lado a lado; luz consistente com os demais planos do imóvel.
