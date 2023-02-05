// Toggle theme

const isOSDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const themeUndefined = !new RegExp("(dark|light)-theme").test(document.body.className);
const themeToggleInputs = document.querySelectorAll(".darkmodeToggleInput");
const themeToggles = document.querySelectorAll(".darkmodeToggle");

themeToggles.forEach(toggle => { toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  document.body.classList.toggle("dark-theme");

  themeToggleInputs.forEach((input => {
    input.checked = !input.checked;
  }));

  window.localStorage &&
  window.localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-theme") ? "dark-theme" : "light-theme",
  );
})});

(function () {
  const localTheme = window.localStorage.getItem("theme")
  if (themeUndefined) {
    if (isOSDark && localTheme !== 'light-theme') {
      document.body.classList.add("dark-theme");
      themeToggleInputs.forEach(input => {
        input.checked = false;
      });
    } else {
      document.body.classList.add("light-theme");
      themeToggleInputs.forEach(input => {
        input.checked = true;
      });
    }
  } else {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
  }

  window.localStorage &&
  window.localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-theme") ? "dark-theme" : "light-theme",
  );
})();