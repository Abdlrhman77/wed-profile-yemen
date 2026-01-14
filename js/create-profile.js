   const createCardForm = document.getElementById('createCardForm');

    createCardForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const image = document.getElementById('cardImage').value.trim();
      const name = document.getElementById('cardName').value.trim();
      const desc = document.getElementById('cardDesc').value.trim();

      let cards = JSON.parse(localStorage.getItem('products')) || [];

      cards.push({ img: image, name, desc });

      localStorage.setItem('products', JSON.stringify(cards));

      alert("✅ Card Added Successfully!");z
      window.location.href = "gallery.html";
    });