function applyTheme(theme) {
  localStorage.setItem("siteTheme", theme);
  document.documentElement.dataset.theme = theme;
}

function initTheme() {
  const themeToggle = document.getElementById("themeToggle");
  themeToggle?.addEventListener("click", function(event) {
    let newTheme = document.documentElement.dataset.theme == "dark" ? "light" : "dark";

    applyTheme(newTheme);
  });

  const modeMedia = window.matchMedia('(prefers-color-scheme: dark)');
  modeMedia.addEventListener('change', function(e) {
    if (e.matches) {
      applyTheme('dark')
    } else {
      applyTheme('light')
    }
  })
}

function getSystemTheme() {
  return window
    .matchMedia('(prefers-color-scheme: dark)')
    .matches ? 'dark' : 'light';
}

document.addEventListener("DOMContentLoaded", initTheme);

let theme = localStorage.getItem("siteTheme") || getSystemTheme();
document.documentElement.dataset.theme = theme;