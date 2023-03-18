---
title: Lista de Exercícios
jsarr:
- /assets/js/sheetApi.js
prazo-da-proposta: 16/04/2024
prazo-modelagem: 07/05/2024 
prazo-do-envio-final: 16/04/2024
form-do-envio-da-proposta: https://forms.gle/BcrvaLGNmhvqTLrD8 
form-do-envio-final:
---

### Lista de Exercícios


Confiram a lista de atividades a seguir:

<table>
 <thead>
    <tr>
        <th> Nome </th>
        <th> Prazo de Entrega </th>
        <th> Link para envio </th>
        <!--<th> Qtd Enviados </th>-->
    </tr>
 </thead>
 <tbody>


{% assign atividades = site.atividades | sort: "numero" %}
{% assign today = "now" | date: "%s" %} 
{% for atividade in atividades %}
    <tr>
        <td> <a href="{{ atividade.url | relative_url }}" target="_blank">{{  atividade.nome }}</a></td>
        <td>

        {% comment %}
        {% assign prazo = atividade.prazo | date: "%d/%m/%Y" | date: "%s" %}
        {% if prazo >= today %}
        <span class="label label-green">
        {% else %}
        <span class="label label-red">
        {% endif %}
        {{ atividade.prazo }}</span>
        {% endcomment %}</td>
        <td><!-- <a href="{{ atividade.link}}" class="btn" target="_blank">Enviar</a> --></td>
        <!--<td> <span id="pp{{ atividade.numero }}"></span> </td>-->
    </tr>
{% endfor %}
    <tr>
        <td><a href="{{ 'projeto_final'| relative_url }}#envio1" target="_blank"> Projeto Final - Proposta</a></td>
        <td>
        {% assign prazo = page.prazo-da-proposta | date: "%d/%m/%Y" | date: "%s" %}
        {% if prazo >= today %}
        <span class="label label-green">
        {% else %}
         <span class="label label-red">
        {% endif %}
         {{ page.prazo-da-proposta }} </span></td>
        <td> <a href="{{ page.form-do-envio-da-proposta}}" target="_blank" class="btn">Enviar</a></td>
        <!--<td> <span id="pp"></span> </td>-->
    </tr>
    <tr>
        <td><a href="{{ 'projeto_final'| relative_url }}#envio2" target="_blank"> Projeto Final - Modelagem e Rascunho de interface</a></td>
        <td>
        {% assign prazo = page.prazo-modelagem | date: "%d/%m/%Y" | date: "%s" %}
        {% if prazo >= today %}
        <span class="label label-green">
        {% else %}
         <span class="label label-red">
        {% endif %}
         {{ page.prazo-modelagem }} </span></td>
        <td> <a href="{{ page.form-do-envio-da-proposta}}" target="_blank" class="btn">Enviar</a></td>
        <!--<td> <span id="pp"></span> </td>-->
    </tr>

    <tr>
        <td><a href="{{ 'projeto_final' | relative_url }}#envio3" target="_blank"> Projeto Final - Implementação</a></td>
        <td>
        {% assign prazo = page.prazo-do-envio-final | date: "%d/%m/%Y" | date: "%s" %}
        {% if prazo >= today %}
        <span class="label label-green">
        {% else %}
         <span class="label label-red">
        {% endif %}
         {{ page.prazo-do-envio-final }} </span></td>
        <td> <span class="btn">Via GitHub</span></td>
        <!--<td> <span id="pp"></span> </td>-->
    </tr>


  </tbody>
</table>

<a href="comando" class="btn">Gerar comando</a>
