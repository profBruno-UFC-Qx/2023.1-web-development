---
title: Notas de aula
---

## Notas de aula


{% for file in site.static_files %}
    {% if file.extname == '.pdf'%}
        {% if site.baseurl.size == 0 %}
- [Aula {{ file.basename | replace: "-", " " | replace_first: " ", " - "  }}]( {{ file.path }})
        {% else %}
- [Aula {{ file.basename | replace: "-", " " | replace_first: " ", " - "  }}]( {{site.baseurl}}{{ file.path }})
        {% endif %}
    {% endif %}
{% endfor %}

## Playlist do Youtube

<a href="https://www.youtube.com/playlist?list=PLg9Dmrz4kxn0IalKRCEESBcDZUS29SufW" target="_blank">Todas as videos aulas estão aqui</a>
