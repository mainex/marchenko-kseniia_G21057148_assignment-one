let tableText = "<tr>" +
    "<th>№</th>" +
    "<th></th>" +
    "<th>Product</th>" +
    "<th></th>" +
    "</tr>";
let keys = Object.keys(localStorage), length = keys.length;

function fillTheTable() {
    for (let i = 1; i <= length; ++i) {
        let item = JSON.parse(localStorage.getItem(keys[i - 1]));
        console.log(item);
        tableText += "<tr id='tr" + i + "'>" +
            "<td style='width: 5%'>" + i + "</td>" +
            "<td>" +
            "<img style='width: 200px;' src=\"resources/" + item.image + "\" alt =\"" + item.name + "\" width =\"300\">" +
            "</td>" +
            "<td style='width: 50%'>" +
            "<a href='item.html?id=" + i + "&type=" + item.type + "&color=" + item.color +
            "&description=" + item.description + "&value=" + item.value +
            "&image=" + item.image + "'>" + item.name + "</a>" +
            "</td>" +
            "<td>" + item.value + "</td>" +
            "<td>" +
            "<button class=\"deleteBtn\" onclick='deleteItemFromCart(keys[" + i + "-1], " + i + ")'>Delete</button>" +
            "</td>" +
            "</tr>";
    }
    document.getElementById("cartTable").innerHTML = tableText;
    emptyCheck();
}

function deleteItemFromCart(key, row) {
    localStorage.removeItem(key);
    document.getElementById("tr" + row).style.display = "none";
    emptyCheck();
}

function emptyCheck() {
    if (0 === Object.keys(localStorage).length) {
        document.getElementById("fullCartDiv").innerHTML = "<p> Your cart is empty now. You can visit the <a href='products.html'>Products page</a> and choose some items.";
    }
}
