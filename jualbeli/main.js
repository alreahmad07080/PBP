const products = [
  { name: "Jacket", price: 350000, img: "jacket.jpg" },
  { name: "Shoes", price: 420000, img: "shoes.jpg" },
  { name: "Bag", price: 250000, img: "bag.jpg" },
  { name: "Topi", price: 180000, img: "hat.jpg" },
  { name: "Sweater", price: 210000, img: "sweater.jpg" },
];

const productList = document.getElementById("productList");

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>Rp ${p.price.toLocaleString()}</p>
    <button onclick="addToCart('${p.name}', ${p.price}, '${p.img}')">Tambah ke Keranjang</button>
  `;
  productList.appendChild(card);
});

function addToCart(name, price, img) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price, img });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} telah ditambahkan ke keranjang!`);
}
