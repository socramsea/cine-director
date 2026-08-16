# Bíblia de personagem — consistência entre planos

O maior problema de vídeo generativo com personagem recorrente não é
qualidade de imagem — é o personagem virar OUTRA PESSOA entre o plano 3
e o plano 4. A bíblia resolve isso por especificação exaustiva e imutável.

## Princípio

A bíblia é um bloco de texto CANÔNICO e CONGELADO que entra idêntico,
palavra por palavra, em todo prompt de imagem-referência e todo prompt
de vídeo do projeto. Não se parafraseia a bíblia. Não se "melhora" a
bíblia no meio da produção. Mudou a bíblia = novo projeto visual.

## Estrutura (7 campos obrigatórios)

1. **Identidade física fixa** — idade aparente, etnia, estrutura facial,
   cabelo/calvície, barba. Tudo que define o rosto.
2. **Acessórios de identidade** — itens que ancoram o reconhecimento
   (ex.: óculos de armação fina). Modelos generativos seguram melhor a
   identidade quando há âncoras visuais discretas e repetíveis.
3. **Figurino canônico** — peça e cor exatas. Uma por "ato" do vídeo no
   máximo; cada troca de figurino multiplica o risco de deriva.
4. **Paleta e luz** — hora do dia, temperatura de cor, ambiente
   (ex.: golden hour, oceano turquesa). A luz é parte da identidade.
5. **Postura e energia** — como o personagem se move e ocupa o quadro.
6. **Proibições explícitas** — o que o modelo tende a adicionar e não
   pode (ex.: "no hat, no jewelry, no tattoos").
7. **Frase de estilo de câmera** — a assinatura fotográfica do projeto,
   repetida em todos os planos.

## Exemplo real (estrutura do caso validado)

> Personagem: homem negro, ~40 anos, careca, barba cheia, óculos de
> armação fina, gola alta preta. Luz: golden hour, oceano turquesa ao
> fundo. [Campos 5–7: preencher com a versão canônica congelada do
> projeto — a bíblia completa vive com o projeto, não com o skill.]

## Uso nos prompts

```
[BÍBLIA — colar íntegra, sem editar]
+
[AÇÃO DO PLANO — uma ação principal, ver card do tipo de plano]
+
[CÂMERA — enquadramento e movimento do plano, da decupagem]
```

## Erros conhecidos

- Parafrasear a bíblia "para encurtar o prompt" → deriva de identidade.
- Descrever emoção sem descrever fisicamente ("triste" vs. "olhar baixo,
  ombros caídos") → o modelo muda o rosto para expressar a emoção.
- Duas ações no mesmo plano → o modelo sacrifica a identidade para dar
  conta do movimento.

---

## Projetos sem personagem: bíblia de espaço

Nem todo projeto tem personagem (imóveis, produtos, paisagens). Nesses
casos NÃO force os 7 campos — use a **bíblia de espaço**, com 5 campos:

1. **Identidade do espaço/objeto** — o que é, materiais, cores dominantes.
   Para imóvel real: a foto-fonte É a identidade; a bíblia descreve o que
   a foto mostra, nunca o que se gostaria que mostrasse.
2. **Luz canônica** — hora do dia, temperatura, direção. UMA condição de
   luz para o projeto inteiro, mesmo que as fotos-fonte variem — é o que
   faz cômodos diferentes parecerem o mesmo imóvel.
3. **Paleta congelada** — 3–4 cores que amarram todos os planos.
4. **Assinatura de câmera** — lente/ângulo/altura padrão do projeto
   (ex.: "wide, altura do olho, sempre nivelada" — horizonte torto em
   imóvel parece defeito estrutural).
5. **Proibições explícitas** — o que o modelo tende a adicionar e não
   pode (ex.: "no people, no pets, no text, no added furniture").

Mesmas regras da bíblia de personagem: bloco canônico CONGELADO, colado
íntegro em todo prompt, sem paráfrase, sem "melhorias" no meio da produção.

Card correspondente: `shots/showcase-imovel.md`.
