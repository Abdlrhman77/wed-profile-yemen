const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "../index.html";
});


if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "../index.html";
}

const table = document.querySelector("main table");
let products = JSON.parse(localStorage.getItem("products")) || [];

function renderTable() {
  table.innerHTML = `<tr><th>URL</th><th>Name</th><th>Description</th><th>Actions</th></tr>`;
  products.forEach((item, index) => {
    const row = table.insertRow();
    row.innerHTML = `
      <td>${item.img}</td>
      <td>${item.name}</td>
      <td>${item.desc}</td>
      <td>
        <button class="edit" onclick="editItem(${index})">Edit</button>
        <button class="delete" onclick="deleteItem(${index})">Delete</button>
      </td>
    `;
  });
}
renderTable();

window.editItem = function(index) {
  const item = products[index];
  const img = prompt("Edit URL:", item.img);
  if (img === null) return;
  const name = prompt("Edit Name:", item.name);
  if (name === null) return;
  const desc = prompt("Edit Desc:", item.desc);
  if (desc === null) return;

  products[index] = { img, name, desc };
  localStorage.setItem("products", JSON.stringify(products));
  renderTable();
};

window.deleteItem = function(index) {
  if (confirm("Are you sure?")) {
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    renderTable();
  }
};
