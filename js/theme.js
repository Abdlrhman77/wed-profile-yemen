// theme.js
function applyTheme() {
  const theme = localStorage.getItem("theme") || "light";
  const color = localStorage.getItem("primaryColor") || "#af0e0e";

  // cgange mod
  if (theme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  // change prim col
  document.documentElement.style.setProperty("--primary-color", color);
}

applyTheme();
