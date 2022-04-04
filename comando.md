---
---

Comando !trabalhos

{% assign atividades = site.atividades | sort: numero %}
{% assign today = "now" | date: "%s" %} 

{% assign icons = ":notebook_with_decorative_cover:,:closed_book:,:blue_book:,:green_book:,:orange_book:,:notebook:" | split: ","  %}

{% for atividade in atividades %}

{% assign info = atividade.nome | strip | split: " " %} 
{% assign first = info[1] | slice: 0 %}
{% case first %}
    {% when "0" %}
        {% capture first_number %} :zero: {% endcapture %}
    {% when "1" %}
        {% capture first_number %} :one: {% endcapture %}
    {% else %}
{% endcase %}

{% assign last = info[1] | slice: 1 %}
{% case last %}
    {% when "0" %}
        {% capture last_number %} :zero: {% endcapture %}
    {% when "1" %}
        {% capture last_number %} :one: {% endcapture %}
    {% when "2" %}
        {% capture last_number %} :two: {% endcapture %}
    {% when "3" %}
        {% capture last_number %} :three: {% endcapture %}
    {% when "4" %}
        {% capture last_number %} :four: {% endcapture %}
    {% when "5" %}
        {% capture last_number %} :five: {% endcapture %}
    {% when "6" %}
        {% capture last_number %} :six: {% endcapture %}
    {% when "7" %}
        {% capture last_number %} :seven: {% endcapture %}
    {% when "8"%}
        {% capture last_number %} :eight: {% endcapture %}
    {% when "9" %}
        {% capture last_number %} :nine:  {% endcapture %}
    {% else %}
{% endcase %}

{% assign icon_number = info[1] | modulo: icons.size %}

```markdown
**Lista** {{ first_number }}{{ last_number }}: {{ atividade.nome | split: "-" | slice: 1}} - {{ icons[icon_number] }}
 - **Descrição:** https://profbruno-ufc-qx.github.io{{ atividade.url | absolute_url}}
 - **Prazo:** {{atividade.prazo}}

```
{% endfor %}

