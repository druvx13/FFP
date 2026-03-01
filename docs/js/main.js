/**
 * FFP License Website — Shared JavaScript
 */

(function () {
  "use strict";

  /* ----------------------------------------------------------
     Mobile navigation toggle
     ---------------------------------------------------------- */
  function initMobileNav() {
    var toggle = document.querySelector(".nav-toggle");
    var links  = document.querySelector(".nav-links");

    if (!toggle || !links) return;

    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      links.classList.toggle("is-open");
    });

    // Close menu when a nav link is clicked (better mobile UX)
    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    // Close menu when focus moves outside the nav
    document.addEventListener("click", function (e) {
      if (!toggle.contains(e.target) && !links.contains(e.target)) {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ----------------------------------------------------------
     Generic clipboard copy helper
     ---------------------------------------------------------- */
  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    // Fallback for older browsers / non-HTTPS contexts
    var el = document.createElement("textarea");
    el.value = text;
    el.style.position = "fixed";
    el.style.opacity  = "0";
    document.body.appendChild(el);
    el.focus();
    el.select();
    try {
      document.execCommand("copy");
      document.body.removeChild(el);
      return Promise.resolve();
    } catch (err) {
      document.body.removeChild(el);
      return Promise.reject(err);
    }
  }

  /* ----------------------------------------------------------
     Flash a button to give copy feedback
     ---------------------------------------------------------- */
  function flashButton(btn, successLabel, duration) {
    var original = btn.textContent;
    duration = duration || 2000;

    btn.textContent = successLabel || "Copied!";
    btn.classList.add("copied");

    setTimeout(function () {
      btn.textContent = original;
      btn.classList.remove("copied");
    }, duration);
  }

  /* ----------------------------------------------------------
     License copy button (index.html)
     ---------------------------------------------------------- */
  function initLicenseCopy() {
    var btn = document.getElementById("copy-btn");
    var box = document.getElementById("raw-license-text");

    if (!btn || !box) return;

    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var text = box.innerText || box.textContent;

      copyToClipboard(text)
        .then(function () {
          flashButton(btn, "Copied!");
        })
        .catch(function (err) {
          console.error("Clipboard copy failed:", err);
          flashButton(btn, "Failed – try manually", 3000);
        });
    });
  }

  /* ----------------------------------------------------------
     Badge copy buttons (badges.html)
     ---------------------------------------------------------- */
  function initBadgeCopy() {
    document.querySelectorAll(".copy-button[data-copy]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var text = btn.getAttribute("data-copy");
        copyToClipboard(text)
          .then(function () {
            flashButton(btn, "Copied!");
          })
          .catch(function (err) {
            console.error("Clipboard copy failed:", err);
            flashButton(btn, "Failed", 3000);
          });
      });
    });
  }

  /* ----------------------------------------------------------
     Bootstrap everything on DOMContentLoaded
     ---------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    initMobileNav();
    initLicenseCopy();
    initBadgeCopy();
  });
})();
