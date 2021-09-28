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


