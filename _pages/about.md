---
layout: profile-home
permalink: /
title: "张昊 · Hao Zhang"
share_image: /images/mangzhong/desert-planter-current.jpg
description: "我在上海交通大学内蒙古研究院工作，也是上海芒智种科技创始人。我和团队为沙地、滩涂和农田研制机器人。I design field robots at Shanghai Jiao Tong University’s Inner Mongolia Research Institute and founded Shanghai Mangzhizhong Technology."
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
    <div class="profile-affiliations">
      {% for institution in site.author.affiliations %}
        <p><span lang="zh-CN">{{ institution.zh | escape }}</span><span lang="en">{{ institution.en | escape }}</span></p>
      {% endfor %}
    </div>
    <div class="profile-contact">
      <div class="profile-email-row">
        <a class="profile-email" data-profile-email href="mailto:{{ site.author.email | escape }}">{{ site.author.email | escape }}</a>
        <button type="button" class="profile-copy" data-copy-email aria-label="复制邮箱地址 · Copy email address" hidden>复制 <span lang="en">Copy</span></button>
      </div>
      <span class="profile-copy-status" data-copy-status role="status" aria-live="polite"></span>
    </div>
    <nav class="profile-actions" aria-label="项目与简历 · Projects and CVs">
      <a class="profile-cv-link profile-project-link" href="{{ '/portfolio/' | relative_url }}"><span lang="zh-CN">我的项目</span> <small lang="en">Projects ↗</small></a>
      <a class="profile-cv-link" href="{{ '/assets/HaoZhang_Resume_ZH.pdf' | relative_url }}?v=20261114" type="application/pdf" hreflang="zh-CN"><span lang="zh-CN">中文简历</span> <small lang="en">PDF</small></a>
      <a class="profile-cv-link" href="{{ '/assets/HaoZhang_Resume.pdf' | relative_url }}?v=20261114" type="application/pdf" hreflang="en"><span lang="en">English CV</span> <small lang="en">PDF</small></a>
    </nav>
  </div>
  <figure class="profile-hero-figure">
    <img class="profile-hero-image" src="{{ '/images/mangzhong/desert-planter-current.jpg' | relative_url }}" width="1438" height="862" alt="沙地上的芒种种植机器人，车身后方留有两行车辙 · The Mangzhong desert planter on sand, with two tire tracks behind it" fetchpriority="high">
    <figcaption class="profile-photo-credit"><span lang="zh-CN">我们在沙地里试验的芒种灌木种植机器人中试机型</span><span lang="en">Our pilot-scale Mangzhong desert shrub planter in the field</span></figcaption>
  </figure>
</section>

<section class="profile-section" aria-labelledby="profile-about-title">
  <header class="profile-section-head">
    <h2 class="profile-section-title" id="profile-about-title"><span lang="zh-CN">关于我</span> <small lang="en">About me</small></h2>
  </header>
  <div class="profile-story">
    <div class="profile-story-zh" lang="zh-CN">
      <p>2020年大二暑假，我第一次跟着上海交大绿格公益团去甘肃民勤。我们扎了两周麦草方格，把流沙固定住，再在格子里种梭梭。种梭梭时，铁锹刚一提，沙就沿着坑壁往回流，手里的苗还没来得及放。接下来的两个暑假，我又回到了民勤。</p>
      <p>读研后，我和几位同学组建了芒种团队。我们把下苗的通道做进钻头，钻到栽植深度才张开尖嘴，让苗先落下，再让沙子回填。后来我创办了上海芒智种科技有限责任公司，带队把这套机构装上车，做出了沙漠灌木种植机器人的中试机型。2026年3月，我在交大读完能源动力硕士，现已入职上海交通大学内蒙古研究院。眼下我和团队在研制草方格铺设装备，也在改进供苗和栽植机构，让车在同样的时间里多种一些苗。</p>
      <p>在上海外滩大会结识湛江红树林保护区的工作人员后，我们受邀去看当地人怎样趁退潮种红树。人抱着苗走在滩涂上，有时半个身子会陷进泥里，我们正给种植机换上宽船底式底盘，让它能载着苗走过软泥，沿用已有的机构栽苗。</p>
      <p>央视节目组牵线，我们去了南京溧水的金色庄园。温室里，熟草莓常藏在青果后面，我们正研制能从侧面绕进去的采摘机械臂，再用柔软的果托接住摘下的草莓，减少磕碰。</p>
    </div>
    <div class="profile-story-en" lang="en">
      <p>In the summer of 2020, I joined a volunteer team from Shanghai Jiao Tong University in Minqin, Gansu. We spent two weeks laying straw checkerboards to hold the dunes in place, then planted saxaul shrubs in the squares. As soon as I lifted my spade, sand slipped back into the hole. I returned the next two summers.</p>
      <p>In graduate school, a few classmates and I started Mangzhong. We built a hollow drill that opens at planting depth, giving the seedling time to drop before the sand covers its roots. I founded Shanghai Mangzhizhong Technology Co., Ltd. and led the team that built our pilot-scale desert shrub planter. I finished my master’s in energy and power engineering in March 2026 and have since joined Shanghai Jiao Tong University’s Inner Mongolia Research Institute. We are building equipment to lay straw checkerboards and refining the feeder and planting mechanism so the vehicle can plant more seedlings per shift.</p>
      <p>At Shanghai’s INCLUSION Conference, we met staff from the Zhanjiang Mangrove National Nature Reserve, who invited us to see how seedlings are planted at low tide. Workers carrying seedlings can sink waist-deep in mud, so we are designing a wide, hull-shaped chassis to carry the planter across the flats while keeping its feeding and planting mechanisms.</p>
      <p>A CCTV production team introduced us to Golden Manor, a strawberry grower in Lishui, Nanjing. Ripe berries often hang behind green ones, so we are developing picking arms that reach in from the side and soft trays to receive the fruit without bruising it.</p>
    </div>
  </div>
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

<a class="profile-team" href="{{ '/mangzhong/' | relative_url }}">
  <div class="profile-team-label"><h2 class="profile-section-title"><span lang="zh-CN">芒种团队</span> <small lang="en">Mangzhong team</small></h2><span class="profile-team-arrow" aria-hidden="true">↗</span></div>
  <img src="{{ '/images/mangzhong_ren.png' | relative_url }}" width="1608" height="414" loading="lazy" alt="芒种队员在夜间调机、一起检修钻具并在沙地试钻 · Team members adjusting and testing the planting mechanism">
</a>

<script defer src="{{ '/assets/js/profile-contact.js' | relative_url }}?v=20261114"></script>
