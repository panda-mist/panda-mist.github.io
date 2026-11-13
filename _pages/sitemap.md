---
layout: archive
title: "网站地图 · Sitemap"
permalink: /sitemap/
author_profile: true
---

{% include base_path %}

在这里找项目、文章和站内页面 · Browse the pages, projects and posts. [网站索引（XML）· XML sitemap]({{ base_path }}/sitemap.xml)

<h2>页面 · Pages</h2>
{% for post in site.pages %}
  {% include archive-single.html %}
{% endfor %}

<h2>文章 · Posts</h2>
{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}

{% capture written_label %}'None'{% endcapture %}

{% for collection in site.collections %}
{% unless collection.output == false or collection.label == "posts" %}
  {% capture label %}{{ collection.label }}{% endcapture %}
  {% if label != written_label %}
  <h2>{% case collection.label %}{% when 'portfolio' %}工程项目 · Projects{% when 'teaching' %}教学 · Teaching{% when 'talks' %}演讲 · Talks{% when 'publications' %}学术发表 · Publications{% else %}{{ label }}{% endcase %}</h2>
  {% capture written_label %}{{ label }}{% endcapture %}
  {% endif %}
{% endunless %}
{% for post in collection.docs %}
  {% unless collection.output == false or collection.label == "posts" %}
  {% include archive-single.html %}
  {% endunless %}
{% endfor %}
{% endfor %}
