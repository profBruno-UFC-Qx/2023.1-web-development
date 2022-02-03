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
{% assign atividades = site.atividades | sort: "nome" %}
{% assign today = "now" | date: "%s" %} 
{% for atividade in atividades %}
    <tr>
        <td> <a href="{{ atividade.url | relative_url }}" target="_blank">{{  atividade.nome }}</a></td>
        <td>
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
    <tr>
        <td><a href="{{ 'projeto_final'| relative_url }}" target="_blank"> Projeto Final - Proposta</a></td>
        <td>
        {% assign prazo = "21/11/2021" | date: "%d/%m/%Y" | date: "%s" %}
        {% if prazo >= today %}
        <span class="label label-green">
        {% else %}
         <span class="label label-red">
        {% endif %}
         21/11/2021 </span></td>
        <td> <a href="https://forms.gle/92r4cKs6CKDWeuAF9" target="_blank" class="btn">Enviar</a></td>
        <td> <span id="pp"></span> </td>
    </tr>
    <tr>
        <td><a href="{{ 'projeto_final' | relative_url }}" target="_blank"> Projeto Final - Implementação</a></td>
        <td>
        {% assign prazo = "06/02/2022" | date: "%d/%m/%Y" | date: "%s" %}
        {% if prazo >= today %}
        <span class="label label-green">
        {% else %}
         <span class="label label-red">
        {% endif %}
         06/02/2022 </span></td>
        <td> <a href="https://forms.gle/HPqNW2KZ1yEEp5Ps9" class="btn">Enviar</a></td>
        <td> <span id="pp"></span> </td>
    </tr>

  </tbody>
</table>

<a href="comando" class="btn">Gerar comando</a>
