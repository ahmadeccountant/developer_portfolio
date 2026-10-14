(function () {
  "use strict";

  var cfg = window.SITE_CONFIG || {};
  var projects = window.PROJECTS || [];

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Project cards (rendered from js/projects.js) ---------- */
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function externalLink(href, label, className) {
    var a = el("a", className, label);
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    return a;
  }

  function renderProjects() {
    var grid = document.getElementById("projectGrid");
    if (!grid) return;

    projects.forEach(function (p, index) {
      var col = el("div", "col-lg-6 reveal");
      var card = el("article", "project-card");
      card.setAttribute("aria-labelledby", "project-" + p.id);

      var media = el("div", "project-media");
      if (p.image) {
        var img = document.createElement("img");
        img.src = p.image;
        img.alt = p.alt || p.title + " preview";
        img.loading = "lazy";
        media.appendChild(img);
      } else if (p.preview) {
        media.setAttribute("role", "img");
        media.setAttribute("aria-label", p.alt || p.title + " preview");
        media.innerHTML = p.preview; // trusted, author-supplied SVG from projects.js
        media.appendChild(el("span", "preview-note", "Illustrated preview"));
      }
      card.appendChild(media);

      var body = el("div", "project-body");
      var number = String(index + 1);
      if (number.length < 2) number = "0" + number;
      body.appendChild(el("p", "project-kind", "Project " + number + " · " + p.kind));
      var h3 = el("h3", "project-title", p.title);
      h3.id = "project-" + p.id;
      body.appendChild(h3);
      body.appendChild(el("p", "project-desc", p.description));

      if (p.highlights && p.highlights.length) {
        var ul = el("ul", "project-points");
        p.highlights.forEach(function (h) { ul.appendChild(el("li", null, h)); });
        body.appendChild(ul);
      }

      var tags = el("ul", "tag-list");
      tags.setAttribute("aria-label", "Technologies used");
      p.tags.forEach(function (t) { tags.appendChild(el("li", "tag", t)); });
      body.appendChild(tags);

      if (p.notice) {
        var note = el("p", "project-notice");
        note.appendChild(el("strong", null, "Disclaimer: "));
        note.appendChild(document.createTextNode(p.notice));
        body.appendChild(note);
      }

      var actions = el("div", "project-actions");
      actions.appendChild(externalLink(p.demo, p.demoLabel || "View Live Project", "btn btn-accent"));
      actions.appendChild(externalLink(p.github, p.githubLabel || "View Source Code", "btn btn-outline-light"));
      body.appendChild(actions);

      card.appendChild(body);
      col.appendChild(card);
      grid.appendChild(col);
    });
  }

  /* ---------- Scroll reveal (respects reduced motion) ---------- */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach(function (i) { i.classList.add("is-visible"); });
      return;
    }
    document.documentElement.classList.add("has-reveal");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (i) { io.observe(i); });
  }

  /* ---------- Active nav link on scroll ---------- */
  function initScrollSpy() {
    var links = Array.prototype.slice.call(document.querySelectorAll(".navbar .nav-link"));
    var map = {};
    links.forEach(function (l) { map[l.getAttribute("href").slice(1)] = l; });
    var sections = Object.keys(map).map(function (id) { return document.getElementById(id); }).filter(Boolean);
    if (!("IntersectionObserver" in window) || !sections.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (l) { l.classList.remove("active"); l.removeAttribute("aria-current"); });
          var active = map[entry.target.id];
          if (active) { active.classList.add("active"); active.setAttribute("aria-current", "true"); }
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { io.observe(s); });
  }

  /* ---------- Close the mobile menu after choosing a link ---------- */
  function initMobileNav() {
    var menu = document.getElementById("siteNav");
    if (!menu || !window.bootstrap) return;
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        if (menu.classList.contains("show")) {
          window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("show")) {
        window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
        var toggler = document.querySelector(".navbar-toggler");
        if (toggler) toggler.focus();
      }
    });
  }

  /* ---------- Contact form (Formspree) ---------- */
  function initForm() {
    var form = document.getElementById("contactForm");
    if (!form) return;

    var status = document.getElementById("formStatus");
    var setupNote = document.getElementById("formSetupNote");
    var button = document.getElementById("submitBtn");
    var idleLabel = button.textContent;
    var formId = (cfg.formspreeId || "").trim();
    var configured = formId !== "" && formId !== "YOUR_FORM_ID";
    var endpoint = configured ? "https://formspree.io/f/" + encodeURIComponent(formId) : "";
    var sending = false;

    if (!configured && setupNote) setupNote.hidden = false;

    function setStatus(message, kind) {
      status.textContent = message;
      status.className = "form-status" + (kind ? " is-" + kind : "");
      if (kind === "error") status.setAttribute("role", "alert");
      else status.setAttribute("role", "status");
    }

    function fieldError(field) {
      return document.getElementById(field.id + "-err");
    }

    function validateField(field) {
      var value = field.value.trim();
      var valid = value !== "";
      if (valid && field.type === "email") {
        valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
      }
      var err = fieldError(field);
      field.classList.toggle("is-invalid", !valid);
      field.setAttribute("aria-invalid", valid ? "false" : "true");
      if (err) err.hidden = valid;
      return valid;
    }

    var fields = Array.prototype.slice.call(form.querySelectorAll("[required]"));
    fields.forEach(function (f) {
      f.addEventListener("blur", function () { if (f.value !== "" || f.classList.contains("is-invalid")) validateField(f); });
      f.addEventListener("input", function () { if (f.classList.contains("is-invalid")) validateField(f); });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (sending) return; // prevents duplicate submissions

      // Honeypot: silently stop bots
      if (form.elements._gotcha && form.elements._gotcha.value) return;

      var firstInvalid = null;
      fields.forEach(function (f) {
        if (!validateField(f) && !firstInvalid) firstInvalid = f;
      });
      if (firstInvalid) {
        firstInvalid.focus();
        setStatus("Please correct the highlighted fields.", "error");
        return;
      }

      if (!configured) {
        setStatus("Your message was not sent: the contact form is not connected yet. Please email " + (cfg.fallbackEmail || "me") + " directly.", "error");
        return;
      }

      sending = true;
      button.disabled = true;
      button.textContent = "Sending…";
      form.setAttribute("aria-busy", "true");
      setStatus("Sending your message…", "");

      var data = new FormData(form);
      data.append("_subject", form.elements.subject.value.trim());

      fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" }
      }).then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json().catch(function () { return {}; });
      }).then(function (json) {
        if (json && json.errors) throw new Error("Form service reported errors");
        form.reset();
        fields.forEach(function (f) { f.classList.remove("is-invalid"); f.setAttribute("aria-invalid", "false"); });
        setStatus("Thank you. Your message was sent successfully.", "success");
      }).catch(function () {
        // Entered information is kept so nothing needs to be retyped.
        setStatus("Your message could not be sent. Please try again, or email " + (cfg.fallbackEmail || "me") + " directly.", "error");
      }).then(function () {
        sending = false;
        button.disabled = false;
        button.textContent = idleLabel;
        form.removeAttribute("aria-busy");
      });
    });
  }

  renderProjects();
  initReveal();
  initScrollSpy();
  initMobileNav();
  initForm();
})();
