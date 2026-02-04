let cart = JSON.parse(localStorage.getItem("cart")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];

function addToCart(name, price){
    cart.push({name, price});
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
}

function searchMedicine(){
    let v = searchBox.value.toLowerCase();
    document.querySelectorAll(".card").forEach(card=>{
        card.style.display = card.innerText.toLowerCase().includes(v) ? "block" : "none";
    });
}

function goPayment(){ location.href="payment.html"; }

function pay(){
    orders.push(...cart);
    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.removeItem("cart");
    alert("Order placed successfully");
    location.href="orders.html";
}

function loadCart(){
    if(!cartItems) return;
    let total=0;
    cart.forEach(i=>{
        cartItems.innerHTML += `<li>${i.name} - ₹${i.price}</li>`;
        total+=i.price;
    });
    if(total) document.getElementById("total").innerText="Total: ₹"+total;
}

loadCart();
