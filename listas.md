---
title: Lista de Exercícios
youtubeId1: x7oWQXAB4fo
jsarr:
- /assets/js/sheetApi.js
---

### Lista de Exercícios


Confiram a lista de atividades a seguir:

<table>
 <thead>
    <tr>
        <th> Nome </th>
        <th> Prazo de Entrega </th>
        <th> Link para envio </th>
        <th> Qtd Enviados </th>
    </tr>
 </thead>
 <tbody>
{% assign atividades = site.atividades | sort: "numero" %}
{% for atividade in atividades %}
    <tr>
        <td> <a href="{{ atividade.url | relative_url }}" tareget="_blank">{{  atividade.nome }}</a></td>
        <td>
        {% assign today = "now" | date: "%s" %} 
        {% assign prazo = atividade.prazo | date: "%d/%m/%Y" | date: "%s" %}
        {% if prazo >= today %}
        <span class="label label-green">
        {% else %}
         <span class="label label-red">
        {% endif %}
        {{ atividade.prazo }}</span></td>
        <td> <a href="{{ atividade.link}}" class="btn">Enviar</a></td>
        <td> <span id="pp{{ atividade.numero }}"></span> </td>
    </tr>
{% endfor %}
  </tbody>
</table>

