let theme = localStorage.getItem("theme");
let darkThemeBtn = document.querySelector("#dark-theme-btn");
let lightThemeBtn = document.querySelector("#light-theme-btn");

if (theme == null) {
  setTheme("dark");
} else {
  setTheme(theme);
}

darkThemeBtn.addEventListener("click", () => {
  setTheme("dark");
});

lightThemeBtn.addEventListener("click", () => {
  setTheme("light");
});

function setTheme(mode) {
  if (mode === "light") {
    document.getElementById("theme-style").href = "./src/light.css";
  }
  if (mode === "dark") {
    document.getElementById("theme-style").href = "";
  }

  localStorage.setItem("theme", mode);
}
