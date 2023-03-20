const query = window.location.search;
const params = new URLSearchParams(query);
const _id = params.get('id'), _type = params.get('type'), _title = params.get('title'),
    _description = params.get('description'), _value = params.get('value'), _image = params.get('image');

let element = document.createElement("div");
element.className = "mainDiv";
element.innerHTML = "<h2>" + _title + "</h2>" + "<p>" + _description + "</p>" + "<img src=\"resources/" + _image + "\" alt=\"" + _description + "\" width=\"100%\">" + "<h4>" + _value + "</h4>" + "<button class=\"buyBtn\" type=\"button\" onclick=\"addToCart()\">Buy</button>";
document.body.appendChild(element);

function addToCart() {
    const item = {
        image: _image, title: _title, value: _value, description: _description, type: _type, title: _title,
    }
    localStorage.setItem("cartItem" + localStorage.length, JSON.stringify(item));
    alert("Added to Cart successfully.")
}