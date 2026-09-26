# Danki Code — Desenvolvimento Web Completo

## Projeto — Danki Code Legacy Landing Page

O projeto é uma landing page antiga e oficial da Danki Code, este design foi reaproveitado no curso. Nele foram usados apenas ![HTML Badge](https://img.shields.io/badge/HTML-black?logo=HTML5) e ![CSS Badge](https://img.shields.io/badge/CSS3-black?logo=CSS).

## Objetivo

O objetivo era colocar em prática os conhecimentos adquiridos no módulo de abertura do curso "Desenvolvimento Web Completo" do Danki Code em um projeto real.


> [!important]
>Nesse projeto eu apliquei um pouco de Javascript para gerar um embed de mapa usando a Google Maps Embed API, que possui cota de requisições ilimitadas no seu plano gratuito.

> [!warning]
> 1. Caso você queira usar também, basta criar uma chave de API no [MAPS API](https://mapsplatform.google.com/lp/maps-apis/). Mas, para isso você precisará de um cartão de crédito. Esta API em específico é grátis e não vai gerar cobranças sobre seu uso. Mas, fique atento para não usar outra das diversas opções que o Google oferece.
> 2. Durante a adição do cartão de crédito, uma cobrança temporária é feita para confirmar a validade do cartão. O dinheiro é reembolsado em até 1 semana.
> 3. Atenção ao incorporar sua API Key no seu projeto. Neste, eu usei um arquivo `config.js` para armazenar dados sensíveis (API KEY) como se fosse um arquivo `.env` e o usei para referenciar a chave. Você pode criar o seu próprio ou usar o `config-example.js` que deixei na raiz do projeto.

## Visualização do projeto

Para visualizar esse projeto siga essas etapas:

1. Clone ou baixe o `.zip` deste repositório
2. Abra o `html.index` no seu navegador favorito

## Conclusões

Esse projeto me tomou um pouquinho mais de tempo por conta de retrabalho que eu tive de fazer. No curso o instrutor `Guilherme Grillo` constrói seus designs web utilizando o conceito de desktop-first. Já eu, prefiro uma abordagem mais voltada para mobile-first. Então, após construir meu layout precisei fazer diversas alterações para conseguir o mesmo resultado da proposta do instrutor. Mas, no final não foram tão difíceis de aplicar uma vez que eu deixei a estrutura muito bem organizada e semântica. Objetivo alcançado ✅

## Problemas conhecidos

1. ~~O layout possuia um embbed de mapa que usa a API do Google Maps para forneceer uma localização aproximada à escolha do desenvolvedor. MAs, eu escolhi não incorporar isso porque o instrutor, em sua aula, demonstrou apenas como criar a embbed de forma que API Key ficasse exposta. Optei por não correr esse risco.~~ ✅ Corrigido: eu incorporei um embed de mapa usando a API do Maps Embed API. Porém, isso criou outro problema que eu vou detalhar a seguir.
2. ~~O mapa incorporado não tem uma visualização agradável no layout mobile. Preciso investigar para entender melhor o que está acontecendo.~~ ✅ Corrigido: eu sobreescrevi o min-width diretamente no momento de criar o iframe com Javascript diretamente no estilo inline da tag html.

---

<p style="text-align: center; margin-top: 40px">Sendo desenvolvido com ☕ por Fernando Lima.</p>