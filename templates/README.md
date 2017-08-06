{% if pkg.logo %}![{{pkg.name}}]({{pkg.logo}}) {% endif %}{{ pkg.name }} ![NPM version](https://img.shields.io/npm/v/{{ pkg.name }}.svg?style=flat)
====================================================================================================================================================

{% if pkg.author %}By {{pkg.author}} {% endif %}

{{ pkg.description }}

Installation
--------------
### NPM
```bash
$ npm install {{pkg.name}}
```
### Yarn
```bash
$ yarn add {{pkg.name}}
```

Example
-------
```js
var {{pkg.parsedName}} = require('{{pkg.name}}');
```

{% if apis && false %}
API
---
{% for name,code in apis %}
- {{pkg.name}}.{{name}}()
{% endfor %}
{% endif %}

{% if pkg.license %}
{{ pkg.license }} License
----------------------------
Copyright (c) {{ year }} {% if pkg.author %}{{pkg.author}}{% endif %}

{% if license %}{{license}}{% endif %}
{% endif %}
