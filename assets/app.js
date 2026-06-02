/* =====================================================================
   SITRAIN Hub — interactions + data rendering
   ===================================================================== */
(function () {
  "use strict";
  var D = window.SITE_DATA || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var el = function (html) { var t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstChild; };
  var icon = function (key) { return '<svg><use href="#i-' + key + '"></use></svg>'; };

  /* ---- theme ---- */
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem("si-theme");
    if (saved) root.setAttribute("data-theme", saved);
    else if (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches) root.setAttribute("data-theme", "dark");
  } catch (e) {}
  var tt = $("#themeToggle");
  if (tt) tt.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("si-theme", next); } catch (e) {}
  });

  /* ---- nav ---- */
  function navLinks(target) {
    if (!target || !D.nav) return;
    target.innerHTML = D.nav.map(function (n) { return '<a href="' + n.href + '">' + n.label + '</a>'; }).join("");
  }
  navLinks($("#nav"));
  navLinks($("#navMobile"));

  /* ---- mobile drawer ---- */
  var drawer = $("#drawer");
  var openD = function () { if (drawer) { drawer.classList.add("open"); drawer.setAttribute("aria-hidden", "false"); } };
  var closeD = function () { if (drawer) { drawer.classList.remove("open"); drawer.setAttribute("aria-hidden", "true"); } };
  if ($("#menuBtn")) $("#menuBtn").addEventListener("click", openD);
  if ($("#drawerClose")) $("#drawerClose").addEventListener("click", closeD);
  if (drawer) drawer.addEventListener("click", function (e) { if (e.target.tagName === "A") closeD(); });

  /* ---- renderers (exposed for catalog/course pages) ---- */
  function statCard(s) {
    return '<div class="stat"><div class="stat__v">' + s.value + '<span class="sfx">' + s.suffix + '</span></div>' +
      '<div class="stat__l">' + s.label + '</div><div class="stat__en">' + s.en + '</div></div>';
  }
  function pathCard(t) {
    return '<article class="card path">' +
      '<div class="path__top"><div class="icon-box">' + icon(t.icon) + '</div><span class="eng-num">' + t.index + '</span></div>' +
      '<h3>' + t.name_zh + '</h3><div class="path__en">' + t.name_en + '</div>' +
      '<p>' + t.desc_zh + '</p>' +
      '<ul class="path__topics">' + t.topics.map(function (x) { return "<li>" + x + "</li>"; }).join("") + '</ul>' +
      '<div class="path__foot"><a class="link-arrow" href="catalog.html?track=' + t.id + '">查看课程 ' + icon("arrow") + '</a>' +
      '<span class="eng-num">' + (D.courses ? D.courses.filter(function (c) { return c.track === t.id; }).length : 0) + ' 门</span></div>' +
      '</article>';
  }
  var LV_ZH = { Beginner: "入门", Intermediate: "进阶", Advanced: "高级" };
  function courseCard(c) {
    return '<a class="card course" href="course.html?id=' + c.id + '">' +
      '<div class="course__meta"><span class="code">' + c.id + '</span>' +
      '<span class="tag tag--lv lv-' + c.level + '">' + (LV_ZH[c.level] || c.level) + '</span>' +
      '<span class="tag">' + c.format + '</span></div>' +
      '<h3>' + c.title_zh + '</h3><p>' + c.desc_zh + '</p>' +
      '<div class="course__foot"><span class="hrs">' + icon("clock") + c.hours + ' 学时</span>' +
      '<span class="link-arrow">查看 ' + icon("arrow") + '</span></div></a>';
  }
  function pillarCard(p) {
    return '<article class="pillar"><div class="kicker">' + p.kicker + '</div><h3>' + p.title_zh + '</h3><p>' + p.desc_zh + '</p></article>';
  }
  function resCard(r) {
    return '<article class="card res"><div class="icon-box">' + icon(r.icon) + '</div>' +
      '<div><div class="res__type">' + r.type + '</div><h3>' + r.title_zh + '</h3><p>' + r.desc_zh + '</p></div></article>';
  }
  function voiceCard(v) {
    return '<article class="voice"><p class="voice__q">' + v.quote_zh + '</p>' +
      '<div class="voice__who"><div class="avatar">' + v.initials + '</div>' +
      '<div><div class="voice__name">' + v.name + '</div><div class="voice__role">' + v.role_zh + '</div></div></div></article>';
  }
  window.SITRAIN = { courseCard: courseCard, pathCard: pathCard, LV_ZH: LV_ZH, icon: icon };

  function fill(sel, items, fn) { var n = $(sel); if (n && items) n.innerHTML = items.map(fn).join(""); }
  fill("#stats", D.stats, statCard);
  fill("#paths-grid", D.tracks, pathCard);
  fill("#pillars", D.pillars, pillarCard);
  fill("#res-grid", D.resources, resCard);
  fill("#voices-grid", D.testimonials, voiceCard);
  // featured = first course of each track (up to 6)
  if (D.courses && D.tracks) {
    var featured = D.tracks.map(function (t) { return D.courses.filter(function (c) { return c.track === t.id; })[0]; }).filter(Boolean).slice(0, 6);
    fill("#courses-grid", featured, courseCard);
  }
  if ($("#foot-paths") && D.tracks) {
    $("#foot-paths").innerHTML = D.tracks.slice(0, 5).map(function (t) {
      return '<li><a href="catalog.html?track=' + t.id + '">' + t.name_zh + "</a></li>";
    }).join("");
  }

  /* ---- scroll reveal ---- */
  var targets = document.querySelectorAll(".reveal, [data-stagger]");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    targets.forEach(function (t) { io.observe(t); });
  } else {
    targets.forEach(function (t) { t.classList.add("in"); });
  }
})();
