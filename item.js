function init() {
    const query = window.location.search;
    const params = new URLSearchParams(query);
    const _id = params.get('id'), _type = params.get('type'), _color = params.get('color'),
        _description = params.get('description'), _value = params.get('value'), _image = params.get('image');

    let element = document.createElement("div");
    element.className = "mainDiv";
    element.innerHTML =
        "<h2>" + _color + " " + _type + "</h2>" +
        "<p>" + _description + "</p>" +
        "<img src=\"resources/" + _image + "\" alt=\"" + _description + "\" width=\"100%\">" +
        "<h4>" + _value + "</h4>" +
        "<button class=\"buyBtn\" type=\"button\" onclick=\"addToCart(" + _id + ")\">Buy</button>";
    document.body.appendChild(element);

    function addToCart(number) {
        const item = {
            image: _image,
            name: _color + " " + _type,
            value: _value,
            description: _description,
            color: _color,
            type: _type,
        }
        localStorage.setItem("cartItem" + localStorage.length, JSON.stringify(item));
        alert("Added to Cart successfully.")
    }
}