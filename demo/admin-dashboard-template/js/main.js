// Nebula Admin — Core JavaScript

(function () {
  'use strict';

  const html = document.documentElement;
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const mainContent = document.getElementById('main-content');

  function init() {
    initTheme();
    initSidebar();
    initIcons();
    initDropdowns();
  }

  function initTheme() {
    const saved = localStorage.getItem('nebula-theme');
    if (saved === 'light') {
      html.classList.remove('dark');
    } else {
      html.classList.add('dark');
    }
  }

  function toggleTheme() {
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('nebula-theme', isDark ? 'dark' : 'light');
  }

  function initSidebar() {
    const toggle = document.getElementById('sidebar-toggle');
    const collapseBtn = document.getElementById('sidebar-collapse');

    if (toggle) {
      toggle.addEventListener('click', function () {
        if (window.innerWidth < 1024) {
          sidebar.classList.toggle('open');
          overlay.classList.toggle('hidden');
        } else {
          document.body.classList.toggle('sidebar-collapsed');
        }
      });
    }

    if (overlay) {
      overlay.addEventListener('click', function () {
        sidebar.classList.remove('open');
        overlay.classList.add('hidden');
      });
    }

    if (collapseBtn) {
      collapseBtn.addEventListener('click', function () {
        document.body.classList.toggle('sidebar-collapsed');
      });
    }
  }

  function initIcons() {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  function initDropdowns() {
    document.querySelectorAll('[data-dropdown]').forEach(function (trigger) {
      const target = document.getElementById(trigger.dataset.dropdown);
      if (!target) return;

      trigger.addEventListener('click', function (e) {
        e.stopPropagation();
        target.classList.toggle('hidden');
      });

      document.addEventListener('click', function () {
        target.classList.add('hidden');
      });
    });
  }

  window.toggleTheme = toggleTheme;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
