const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "../index.html";
});

if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "../index.html";
}

  document.getElementById("addForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const img = document.getElementById("img");
    const name = document.getElementById("name").value;
    const desc = document.getElementById("desc").value;

    const cards = JSON.parse(localStorage.getItem("products")) || [];
    cards.push({ img: img.value, name, desc });
    localStorage.setItem("products", JSON.stringify(cards));

    document.getElementById("addMsg").textContent =
      "✅ Data added successfully!";
    e.target.reset();
  });

