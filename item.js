function addToCart(id) {
    localStorage.setItem("cartItem" + id, id);
    alert("Added to Cart successfully.");
}