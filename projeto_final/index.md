---
title: Projeto Final
has_children: true
has_toc: true
---

# Projeto Final

* [Descrição](#desc)
* [Requisitos mínimos](#req)
* [Entregas](#entregas)
  * [Proposta](#envio1)
  * [Modelagem e rascunho da interface](#envio2)
  * [Código](#envio3)
* [Apresentação do projeto](#apresentacao)

---

## Descrição <a name="desc"></a>

Como projeto final da disciplina deverá ser construído um **frontend** de uma aplicação web utilizando o framework **VueJs**, fazendo o uso da bibilioteca **VueRouter** e **Pinia**. 

Está aplicação deve ser uma **SPA – Single Page Application** e sua página principal deve exibida automaticamente ao acessar a raiz da aplicação (**/**).

A aplicação deve usar **CSS**, por essa razão, recomenda-se o uso do **Bootstrap ou de outro framework CSS de sua preferência** para melhorar o visual da aplicação de forma simplificada.

Lembre-se de seguir as boas práticas:

  - Dê preferência ao uso de Javascript e CSS externos ao HTML.
  - Evite o uso de CSS e Javascript diretamente nos elementos HTML.   

O **backend** (API REST) com o qual a sua aplicação deve se comunicar deve ser construído utilizando o <a href="http://strapi.io" target="_blank">Strapi</a>.

O trabalho pode ser feito em dupla
{: .label .label-blue }

## Requisitos mínimos <a name="req"></a>

  1. A sua aplicação deve possuir pelo menos 3 entidades (tabelas) que serão persistidas na base de dados.
  2. A aplicação **frontend** deve implementar os CRUDs de pelo menos duas dessas tabelas.
  3. A aplicação deve persistir por meio de um **backend em um banco de dados**. 
  4. A aplicação deve possuir uma **área pública com páginas/serviços acessíveis a todos; e uma área restrita com páginas/serviços acessíveis somente a usuários autenticados**. Consequentemente, o **frontend** deve implementar um mecanimos de **autenticação & autorização**.
  5. A aplicação deve ter uma barra de navegação/menu com todas as opções/links funcionando e a opção de logout deve estar sempre visível.
  6. A aplicação Web deve ter **modularização de trechos de HTML usados em várias páginas**. 
    - Exemplo: Deixar cabeçalho e rodapé em arquivos separados e incluí-los nas páginas onde serão necessários.
  
O projeto que vai ser desenvolvido deve ser hospedado no <a href="http://www.github.com" target="_blank">GitHub</a>.
{: .label .label-yellow }

Caso o trabalho seja feito em equipe, cada membro da equipe deve usar seu próprio usuário para escrever código.
{: .label .label-yellow }

Não serão aceitos trabalhos implementados em um único commit.
{: .label .label-red }


## Envio da proposta <a name="envio1"></a>

O autor do trabalho ou a dupla, deve escolher o domínio da aplicação, ex: um loja online de doces, e também deve descrever as funcionalidades do sistema, explicando **resumidamente os requisitos do sistema com suas entidades principais**. Essa definição deve ser enviada e **aprovada pelo professor**. 

Para auxiliar nessa tarefa, vocês irão realizar um **fork** do seguinte <a href="https://github.com/profBruno-UFC-Qx/qxd0020-projeto-final" target="_blank">repositório no GitHub </a>. Como vocês podem ver, o **Readme.md** já vem previamente preenchido com um modelo. Vocês devem alterar o modelo de acordo com a realidade da proposta de projeto final de vocês. Vocês podem consultar <a href="https://github.com/profBruno-UFC-Qx/qxd0020-manga-store" target="_blank">o repositório da MangaStore</a>.

Depois disso, a proposta deve ser enviada por meio do seguinte <a href="https://forms.gle/K2iiNVZsHBiGYtkN9" target="_blank">formulário</a>.

Prazo final de entrega: 15/09/2022
{: .label .label-red }

Os trabalhos devem necessariamente ter domínios distintos. 
{: .label .label-yellow }

A ordem de envio para o professor determina quem tem prioridade por determinado domínio. Caso o domínio já tenha sido escolhido por outro aluno, deve-se propor um novo domínio.
{: .label .label-yellow }

## Modelagem e rascunho da interface <a name="envio2"></a>

É esperado que nesse momento, a equipe já tenha em mente de forma clara as principais funcionalidades do sistema e para isso, é necessário que os dados estejam devidamente modelados.

A entrega da modelagem deve ser feita de duas formas:
  - Um digrama entidade relacional ou um diagrama de classes que deixe claro como as entidades se relacionam
  - A "implementação" dessa modelagem utilizando **Strapi**.

Com uma visão clara das funcionalidades do projeto, a equipe deve também entregrar a primeira versão das telas do sistemas. Estas telas devem ser construídas usando HTML, CSS e JavaScript (ou TypeScript). Como são primeiras versões, dados fictícios devem/podem ser utilizados.

No prazo final da entrega, todo esse conteúdo deve estar presente no repositório do GitHub do projeto final, enviado juntamente com a proposta do projeto final.
{: .label .label-yellow }


Prazo final de entrega: 30/10/2022
{: .label .label-red }

## Código <a name="envio3"></a>

Antes de enviar o seu projeto para a avaliação será necessário realizar o preenchimento do restante do arquivo **README.md**  do seu projeto.

Para facilitar a sua vida, apenas altere a segunda parte do **README.md** do repositório que você realizou o **fork** no ato do envio da proposta do projeto final.
{: .label .label-yellow :}

Projetos que não disponibilizarem no README.md as informações acima serão desconsiderados.
{: .label .label-red }


**Strapi**:

O Strapi por padrão utiliza o banco Sqlite, que armazena todo a base de dados em um único arquivo. Logo, se você não alterou nenhuma configuração relacionada ao armazenamento de dados, a base de dados da sua aplicação deve estar localizada em uma pasta **oculta** chamada **.tmp** (isso mesmo, tem um ponto antes do nome), dentro da pasta do Strapi.

Por padrão, esse arquivo não é enviado ao GitHub por motivos óbvios, porém para facilitar a correção, peço que envie o arquivo do banco para o GitHub. Para isso, você precisará alterar o arquivo **.gitignore** presente na raiz do projeto Strapi e remover a segunite linha:

```
.tmp
```

Depois disso, será possível commit e enviar a pasta **.tmp** e o arquivo **data.db** gerado pelo Strapi.


Informações sobre como utiliza o sistema, além de nomes de usuários e senhas devem ser enviadas via formulário de envio do projeto.
{: .label .label-yellow :}

Caso o trabalho seja feito em equipe, cada membro da equipe deve usar seu próprio usuário para escrever código.
{: .label .label-yellow }

No prazo final da entrega, todo o código deve estar disponível no repositório do projeto final no hospedado no GitHub.
{: .label .label-yellow }

Não serão aceitos trabalhos implementados em um único commit.
{: .label .label-red }

Não serão aceitos trabalhos enviados em formato compactados, ex: zip, rar e similares
{: .label .label-red }

Prazo final de entrega: 04/12/2022
{: .label .label-red }

### Apresentação do trabalho <a name="apresentacao"></a>

O trabalho também deverá necessariamente ser apresentado conforme cronograma da disciplina. A não apresentação do trabalho pelo aluno em sua anulação.
{: .label .label-red }
