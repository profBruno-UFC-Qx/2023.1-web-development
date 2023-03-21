---
title: Exercícios práticos
---

### Exercícios práticos


Confiram a lista de atividades a seguir:

<table>
 <thead>
    <tr>
        <th> Nome </th>
        <th> Tópico </th>
        <th> Dificuldade</th>
    </tr>
 </thead>
 <tbody>


{% assign exercicios = site.exercicios | sort: "numero" %}
{% for ex in exercicios %}
    <tr>
        <td> <a href="{{ ex.url | relative_url }}" target="_blank">{{ ex.numero }} - {{  ex.nome }}</a></td>
        <td> {{ ex.topicos }} </td>
        <td> {{ ex.dificuldade }} </td>
    </tr>
{% endfor %}
  </tbody>
</table>

