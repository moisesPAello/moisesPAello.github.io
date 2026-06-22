// Portfolio — minimal progressive enhancement.
(function () {
  'use strict';

  // Footer year.
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Theme toggle. Initial theme is set inline in <head> to avoid a flash.
  var toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  function syncPressed() {
    var isDark = document.documentElement.dataset.theme === 'dark';
    toggle.setAttribute('aria-pressed', String(isDark));
  }
  syncPressed();

  toggle.addEventListener('click', function () {
    var next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    syncPressed();
  });

  // Follow the OS theme only while the user hasn't made an explicit choice.
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  mq.addEventListener('change', function (e) {
    try { if (localStorage.getItem('theme')) return; } catch (err) {}
    document.documentElement.dataset.theme = e.matches ? 'dark' : 'light';
    syncPressed();
  });
})();
