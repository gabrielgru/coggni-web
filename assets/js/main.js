// Coggni web: interacciones mínimas (sin dependencias).
(function () {
  // Año automático en el footer
  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // Menú mobile
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.getElementById("mobile-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // "Cómo funciona": pasos que rotan solos y responden al click
  var steps = Array.prototype.slice.call(document.querySelectorAll(".step"));
  var imgs = Array.prototype.slice.call(document.querySelectorAll(".how-panel img"));
  var current = 0, timer = null, INTERVAL = 3000;
  function show(i) {
    current = i;
    steps.forEach(function (s, k) { s.classList.toggle("is-active", k === i); });
    imgs.forEach(function (im, k) { im.classList.toggle("is-active", k === i); });
  }
  function start() { stop(); timer = setInterval(function () { show((current + 1) % steps.length); }, INTERVAL); }
  function stop() { if (timer) clearInterval(timer); timer = null; }
  steps.forEach(function (s, k) {
    s.addEventListener("click", function () { show(k); start(); });
  });

  // Animaciones de entrada + arrancar rotación solo cuando la sección es visible
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveals = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || reduce) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
    if (!reduce && steps.length) start();
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  reveals.forEach(function (el) { io.observe(el); });

  var how = document.getElementById("how-it-works");
  if (how && steps.length) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { en.isIntersecting ? start() : stop(); });
    }, { threshold: 0.3 }).observe(how);
  }
})();
