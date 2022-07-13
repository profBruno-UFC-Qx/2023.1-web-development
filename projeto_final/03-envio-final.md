---
title: Envio final
parent: Projeto Final
nav_order: 03
---

### Envio final

Este passo só pode ser iniciado após a aprovação da Parte I pelo professor. O projeto que vai ser desenvolvido deve ser hospedado no <a href="http://www.github.com" target="_blank">GitHub</a>.

Caso o trabalho seja feito em equipe, cada membro da equipe deve usar seu próprio usuário para escrever código.
{: .label .label-yellow }

Não serão aceitos trabalhos implementados em um único commit.
{: .label .label-red }

Não serão aceitos trabalhos enviados em formato compactados, ex: zip, rar e similares
{: .label .label-red }

Prazo final de entrega: 26/06/2022
{: .label .label-red }

### Instruções de envio

Antes de enviar o seu projeto para a avaliação será necessário realizar o preenchimento do arquivo **README.md** (gerado automaticamente pelo Github)  do seu projeto.
Este arquivo deverá conter as segunites informações:

- Nome do projeto
- Membros da equipe
-  Tecnologias e frameworks utilizados
  - No Frontend
  - Backend
- Papéis ou tipos de usuário do sistema
- Entidades, Tabelas ou Coleções do sistema
  - Operações implementadas para cada entidade
-  Rotas da API REST utilizadas


Para facilitar a sua vida, copie o [Modelo de README.md]({{site.baseurl}}/assets/README.md.example) e subtitua o arquivo gerado pelo GitHub, depois preencha com dados referentes ao seu projeto.
{: .label .label-yellow :}

Projetos que não disponibilizarem no README.md as informações acima serão desconsiderados.
{: .label .label-red }


**Se você utiliza o Strapi**:

O Strapi por padrão utiliza o banco Sqlite, que armazena todo a base de dados em um único arquivo. Logo, se você não alterou nenhuma configuração relacionada ao armazenamento de dados, a base de dados da sua aplicação deve estar localizada em uma pasta **oculta** chamada **.tmp** (isso mesmo, tem um ponto antes do nome), dentro da pasta do Strapi.

Por padrão, esse arquivo não é enviado ao GitHub por motivos óbvios, porém para facilitar a correç±ao, peço que envie o arquivo do banco para o GitHub. Para isso, você precisará alterar o arquivo **.gitignore** presente na raiz do projeto Strapi e remover a segunite linha:

```
.tmp
```

Depois disso, será possível commit e enviar a pasta **.tmp** e o arquivo **data.db** gerado pelo Strapi.


Informações sobre como utiliza o sistema, além de nomes de usuários e senhas devem ser enviadas via formulário de envio do projeto.
{: .label .label-yellow :}

O  projeto deve ser enviado via o seguinte <a href="https://forms.gle/6W24vv49jCGwpP4a9" target="_blank">formulário.</a>

### Apresentação do trabalho
O trabalho também deverá necessariamente ser apresentado conforme cronograma da disciplina. A não apresentação do trabalho pelo aluno em sua anulação.
{: .label .label-red }

