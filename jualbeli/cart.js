const cartContainer = document.getElementById("cartItems");
const totalHarga = document.getElementById("totalHarga");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  cartContainer.innerHTML = "<p>Keranjang kamu masih kosong 🛒</p>";
} else {
  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>Rp ${item.price.toLocaleString()}</p>
      <button onclick="hapusItem(${index})">Hapus</button>
    `;
    cartContainer.appendChild(div);
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  totalHarga.textContent = `Total: Rp ${total.toLocaleString()}`;
}

function hapusItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  alert("Kamu telah logout.");
}
