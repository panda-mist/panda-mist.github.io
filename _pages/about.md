---
layout: profile-home
permalink: /
title: "张昊 · Hao Zhang"
share_image: /images/mangzhong/desert-planter-current.jpg
description: "张昊，机械工程师、芒种团队创始人。Hao Zhang designs and tests robots for ecological restoration and agriculture."
redirect_from:
  - /about/
  - /about.html
---

<section class="profile-hero" aria-labelledby="profile-name">
  <div class="profile-intro">
    <h1 class="profile-name" id="profile-name"><span lang="zh-CN">张昊</span><span lang="en">Hao Zhang</span></h1>
    <div class="profile-role">
      <img class="profile-portrait" src="{{ '/images/Panda.png' | relative_url }}" width="300" height="302" alt="张昊 · Hao Zhang">
      <div><p lang="zh-CN">机械工程师 · 芒种团队创始人</p><p lang="en">Mechanical engineer, founder of Mangzhong</p></div>
    </div>
    <nav class="profile-actions" aria-label="个人链接 · Profile links">
      <a class="profile-primary-link" href="{{ '/portfolio/' | relative_url }}"><span>我的项目 <small lang="en">Projects</small></span><span aria-hidden="true">↗</span></a>
      <a class="profile-text-link" href="{{ '/assets/HaoZhang_Resume.pdf' | relative_url }}">个人简历 <small lang="en">CV (English PDF)</small></a>
    </nav>
  </div>
  <figure class="profile-hero-figure">
    <img class="profile-hero-image" src="{{ '/images/mangzhong/desert-planter-current.jpg' | relative_url }}" width="1438" height="862" alt="沙地上的芒种种植机器人，车身后方留有两行车辙 · The Mangzhong desert planter on sand, with two tire tracks behind it" fetchpriority="high">
    <figcaption class="profile-photo-credit"><span lang="zh-CN">芒种沙漠灌木种植机器人，现款整机</span><span lang="en">The current Mangzhong desert shrub planter in the field</span></figcaption>
  </figure>
</section>

<section class="profile-section" aria-labelledby="profile-work-title">
  <header class="profile-section-head">
    <h2 class="profile-section-title" id="profile-work-title"><span lang="zh-CN">项目选集</span> <small lang="en">Selected projects</small></h2>
    <a class="profile-section-link" href="{{ '/portfolio/' | relative_url }}">全部项目 <span lang="en">Portfolio</span> <span aria-hidden="true">↗</span></a>
  </header>
  <div class="profile-projects">
    {% assign home_projects = site.portfolio | where_exp: 'project', 'project.mz_order' | sort: 'mz_order' %}
    {% for project in home_projects %}
      {% assign project_names = project.title | split: ' · ' %}
      <a class="profile-project" href="{{ project.url | relative_url }}">
        <div class="profile-project-media">
          {% if project.mz_order == 1 %}
            <img src="{{ '/images/mangzhong/field-planting-spade.jpg' | relative_url }}" width="426" height="240" alt="芒种队员在干沙里试用脚踏栽植铲 · A Mangzhong team member testing a foot-operated planting spade in dry sand" loading="lazy">
          {% else %}
            <img src="{{ project.cover | relative_url }}" alt="{{ project.cover_alt | escape }}" loading="lazy">
          {% endif %}
          {% if project.mz_order == 3 %}<span class="profile-concept">概念图 · Concept</span>{% endif %}
        </div>
        <h3 class="profile-project-name"><span lang="zh-CN">{{ project_names | last | remove: '芒种｜' }}</span><small lang="en">{{ project_names | first }}</small></h3>
      </a>
    {% endfor %}
  </div>
</section>

<section class="profile-section" aria-labelledby="profile-about-title">
  <header class="profile-section-head">
    <h2 class="profile-section-title" id="profile-about-title"><span lang="zh-CN">关于我</span> <small lang="en">About me</small></h2>
    <a class="profile-section-link" href="mailto:2545080736@sjtu.edu.cn">给我写信 <span lang="en">Email</span> <span aria-hidden="true">↗</span></a>
  </header>
  <div class="profile-story">
    <div class="profile-story-zh" lang="zh-CN">
      <p lang="zh-CN">我是张昊。2020年，我在上海交大读机械工程，大二暑假第一次跟着绿格公益团去甘肃民勤。我们扎了两周麦草方格，先把沙固定住，再在格子里种梭梭。接下来的两个暑假，我又回到了民勤。</p>
      <p lang="zh-CN">在民勤，铁锹刚提起来，坑边的沙就往下滑，手里的苗还没来得及放。我回上海上课，当地人还得一锹一锹地种。读研后，我和几位同学组建了芒种团队。我们先做了一支空心钻头，钻到栽植深度才打开尖嘴，让苗从里面落下去。这样，种树的人就不用跟回落的沙子抢时间了。</p>
      <p lang="zh-CN">2026年3月，我在交大读完能源动力硕士。如今我们仍在改那台种植机，也开始为湛江的红树苗、南京的草莓做机器。抱着红树苗的人，每迈一步都要从泥里拔脚。采草莓时，手得绕过青果，轻轻托住后面熟透的那一颗。这些细处，都是我画图之前想先看明白的事。</p>
    </div>
    <div class="profile-story-en" lang="en">
      <p lang="en">I’m Hao Zhang, a mechanical engineer and founder of the Mangzhong robotics team. I earned my bachelor’s degree in mechanical engineering and my master’s in energy and power engineering at Shanghai Jiao Tong University. I completed my master’s in March 2026.</p>
      <p lang="en">I began volunteering in the Tengger Desert in 2020. A hole in dry sand would start filling before we could lower a seedling. We built a hollow drill that opens at planting depth to release the seedling, then lets the sand settle over the roots as it withdraws. I lead mechanism design, vehicle integration and field trials. We are now adapting the planter for mangrove restoration on the tidal flats in Zhanjiang and developing a strawberry harvesting robot with a grower in Nanjing.</p>
    </div>
  </div>
</section>

<a class="profile-team" href="{{ '/mangzhong/' | relative_url }}">
  <div class="profile-team-label"><h2 class="profile-section-title"><span lang="zh-CN">芒种团队</span> <small lang="en">Mangzhong team</small></h2><span class="profile-team-arrow" aria-hidden="true">↗</span></div>
  <img src="{{ '/images/mangzhong_ren.png' | relative_url }}" width="1608" height="414" loading="lazy" alt="芒种队员在夜间调机、一起检修钻具并在沙地试钻 · Team members adjusting and testing the planting mechanism">
</a>
