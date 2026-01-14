const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "../index.html";
});


if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "../index.html";
}

const themeSelect = document.getElementById("themeSelect");
const colorPicker = document.getElementById("colorPicker");
const SaveChange = document.getElementById("Save-Change");

themeSelect.value = localStorage.getItem("theme") || "light";
colorPicker.value = localStorage.getItem("primaryColor") || "#af0e0e";

themeSelect.addEventListener("change", (e) => {
  localStorage.setItem("theme", e.target.value);
  applySettings();
});

SaveChange.addEventListener("click", () => {
  window.location.href="settings.html";
});

colorPicker.addEventListener("input", (e) => {
  localStorage.setItem("primaryColor", e.target.value);
  applySettings();
});

function applySettings() {
  const theme = localStorage.getItem("theme") || "light";
  const color = localStorage.getItem("primaryColor") || "#af0e0e";

  if(theme === "dark"){
    document.documentElement.style.setProperty("--background-color", "#2c2c2c");
    document.documentElement.style.setProperty("--text-color", "#f4f4f4");
  } else {
    document.documentElement.style.setProperty("--background-color", "#f4f9f6");
    document.documentElement.style.setProperty("--text-color", "#333");
  }

  document.documentElement.style.setProperty("--primary-color", color);
}


applySettings();
