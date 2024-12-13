import { products } from "./products.js";
const openMenuEl = document.getElementById("bars");
const closemenuEl = document.getElementById("cancel");
const navbarEl = document.querySelector("nav");
const productsContainer = document.querySelector(".products");
let html = "";
const cartItems = [];
openMenuEl.addEventListener("click", () => {
  navbarEl.style.display = "flex";
  openMenuEl.style.display = "none";
  closemenuEl.style.display = "block";
});

closemenuEl.addEventListener("click", () => {
  navbarEl.style.display = "none";
  openMenuEl.style.display = "block";
  closemenuEl.style.display = "none";
});

function generatingDynamicHtml() {
  products.forEach((product) => {
    html += `
      <div class="product">
          <img src= ${product.productImage} alt="food-2" />
          <span>${product.productName}</span>
          <span>$${product.productPrice}</span>
          <button class="order-btn">Order Now</button>
      </div>`;
  });
  productsContainer.innerHTML = html;
}

generatingDynamicHtml();

function addToCart(id) {}
