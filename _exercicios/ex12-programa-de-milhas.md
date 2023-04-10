---
layout: exercicio
numero: 12
nome: Programa de milhas
topicos: JavaScript, funcional
---

### Descrição:

Uma empresa de aviação tem um programa de fidelidade que premia seus clientes com milhas por cada voo que eles realizam. O cálculo de milhas é baseado na distância dos voos, e apenas voos de empresas parceiras são aceitos. Os voos nacionais rendem 1 milha para cada quilometro percorrida, enquanto os voos internacionais rendem o dobro de milhas para a mesma distância percorrida.

Escreva um programa que calcule o total de milhas ganhos por um cliente com base em uma lista de voos. Para isso siga as seguintes instruções:

1. Crie uma lista de voos com as informações necessárias: origem, destino, nacionalidade, operadora e distância.
  * Considere a lista de voos apresentadas na tabela abaixo
1. Use a função `filter` para separar os voos nacionais dos voos internacionais.
1. Use a função `map` para transformar os voos nacionais e internacionais em milhas, de acordo com a quantidade especificada para cada tipo de voo e a distância percorrida.
1. Use a função `reduce` para calcular o total de milhas ganhos pelo cliente.
1. Exiba os seguintes resultados na tela:
  * Número de voos nacionais realizados
  * Número de voos internacinais realizados
  * Número de voos realizados por empresas não parceiras
  * Total de milhas acumuladas
  
  

 Voos 

| Origem | Destino | Distância | Operadora
|---|---|---|---|
| Rio de Janeiro | São Paulo| 400 | AeroLink |
| São Paulo | Miami | 8000 | SkyWings |
| São Paulo | Paris | 10000 | Oceanic Airways |
| Belo Horizonte | Rio de Janeiro | 300 | AeroLink |
| Miami | Nova York | 1200 | JetStream |
| São Paulo | Belo Horizonte | 500 | StarFly |
| Porto Alegre | Rio de janeiro | 800 | AeroLink |
| Rio de Janeiro | Fortaleza | 2800 | StarFly |
| Fortaleza | Lisboa | 6500 | Oceanic Airways |
| Belo Horizonte | Salvador | 900 | StarFly |
| Paris | Londres | 300 | AeroLink |
| Londres | Nova York | 3500 | Pacific Air |
| São Paulo | Lisboa | 7000 | SkyWings |
| Belo Horizonte | São Paulo | 500 | AeroLink |
| Rio de Janeiro | Recife | 2600 | Oceanic Airways |
| Recife | Madri | 5900 | SkyWings |
| São Paulo | Rio de Janeiro | 400 | StarFly |
| Rio de Janeiro | Brasília | 400 | StarFly |
| Brasília | Nova York | 5500 | StarFly |
| São Paulo | Brasília | 900 | SkyWings |

Considere que as operadoreas **JetStream** e **Pacific Air** <mark>NÃO</mark> não parceiras do programa de fidelidade.


Gostou? Não esqueça de avaliar o exercício:

<a class="btn" href="https://forms.gle/scs1VxDDFSiMqAhe8" target="_blank"> Abra o formulário de avaliação</a>
