const price = document.getElementById("price")
const total = document.getElementById("total")
const button = document.getElementById("addToCart")

// States or data
const productPrice = 5000;
let totalPrice = 0;

// Set product Initially
price.innerText = `৳ ${productPrice}`
total.innerText = `Total: ৳ ${totalPrice}`

button.addEventListener("click", () => {
    totalPrice += productPrice;
    total.innerText = `Total: ৳ ${totalPrice}`
})