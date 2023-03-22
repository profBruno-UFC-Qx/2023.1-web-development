---
layout: exercicio
numero: 8
nome: Estilizando um site de notícia
topicos: Seletores CSS, Pseudo-Classes
---

### Descrição:

Neste exercício, você irá criar uma página web que exibe um site de notícias que deverá ser estilizado.

O objetivo deste exercício é praticar o uso de seletores CSS pseudo-classes.

Instruções:

 - Crie uma página web com código HTML a seguir:

```html
<header>
  <h1>Mantenha-se informado</h1>
  <nav>
    <ul>
      <li><a href="#">Principal</a></li>
      <li><a href="#">Sobre nós</a></li>
      <li><a href="#">Contato</a></li>
    </ul>
  </nav>
</header>
<main>
  <section>
    <h2>Seja bem-vindo!</h2>
    <p>Aqui você vai ficar antenado sobre tudo!.</p>
  </section>
  <section>
    <h2>Destaques</h2>
    <ul>
      <li>
        <article>
          <h3><a href="#">Artigo 1</a></h3>
          <p class="date">Publicado em 01 de Janueiro de 2023</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in nunc ut felis eleifend sollicitudin sed non ante.</p>
        </article>
      </li>
      <li>
        <article>
          <h3><a href="#">Artigo 2</a></h3>
          <p class="date">Publicado em 15 de February de 2023</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in nunc ut felis eleifend sollicitudin sed non ante.</p>
        </article>
      </li>
    </ul>
  </section>
  <section>
    <h2>Mais recentes</h2>
    <ul>
      <li>
        <article>
          <h3><a href="#">Artigo 4</a></h3>
          <p class="date">Publicado em 15 de Março de 2023</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in nunc ut felis eleifend sollicitudin sed non ante.</p>
        </article>
      </li>
      <li>
        <article>
          <h3><a href="#">Artigo 5</a></h3>
          <p class="date">Publicado em 18 de Março de 2023</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in nunc ut felis eleifend sollicitudin sed non ante.</p>
        </article>
      </li>
    </ul>
  </section>
</main>

```

- Crie um arquivo chamado <mark>estilos.css</mark>
- Crie um novo arquivo CSS e vincule-o ao arquivo HTML usando a tag `<link>` dentro da seção `<head>`
- Escolha os seletores CSS mais adequados e aplique os estilos a seguir:

  - Defina a família de fontes da página inteira como *'Helvetica, Arial, sans-serif'*.
  - Altere a cor de fundo do cabeçalho (*header*) para *#333333*
  - Altere a cor da fonte dos links de navegação para *#FFFFFF*
  - Altere a cor da fonte dos títulos das seções para *#0099FF*
  - Altere o tamanho da fonte das datas dos artigos para *14px* 
  - Altere o estilo da fonte das datas dos artigos para *itálico*
  - Altere a cor da fonte das datas dos artigos para *gray*
  - Defina a cor de fundo dos itens ímpar da lista da seção 'Artigos em destaque' para *#F2F2F2*
  - Defina a cor do texto dos links localizados dentro de elementos *h3* para *red*
  - Defina a cor da fonte dos links dentro da seção 'Mais recentes' para *#FF9900*


**Certifique-se de validar seu código HTML usando um validador como o [W3C Markup Validation Service](https://validator.w3.org/), para garantir que seu código esteja sem erros e bem formado**.

**Experimente validar o seu código CSS em sites como:**

- <a href="https://jigsaw.w3.org/css-validator/" target="_blank">W3C CSS validation Service</a>
- <a href="https://beautifytools.com/css-validator.php" hreflang="en" target="_blank">Beatifytools CSS validator</a>

Gostou? Não esqueça de avaliar o exercício:

<a class="btn" href="https://forms.gle/scs1VxDDFSiMqAhe8" target="_blank"> Abra o formulário de avaliação</a>
