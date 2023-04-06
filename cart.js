let tableText = "<tr>" + "<th>№</th>" + "<th></th>" + "<th>Product</th>" + "<th></th>" + "</tr>";
let keys = Object.keys(localStorage), length = keys.length;

function fillTheTable() {
    emptyCheck();
    for (let i = 1; i <= length; ++i) {
        let item = JSON.parse(localStorage.getItem(keys[i - 1]));
        console.log(item);
        tableText += "<tr id='tr" + i + "'>" + "<td style='width: 5%'>" + i + "</td>" + "<td>" + "<img style='width: 200px;' src=\"resources/" + item.image + "\" alt =\"" + item.name + "\" width =\"300\">" + "</td>" + "<td style='width: 50%'>" + "" + i + "" + item.type + "" + item.title + "<a href='item.php?id=&type=&title=&description=&value=&image='>" + item.description + "" + item.value + "" + item.image + "" + item.title + "" + "</td>" + "<td>" + item.value + "</td>" + "<td>" + "<button class=\"deleteBtn\" onclick='deleteItemFromCart(keys[" + i + "-1], " + i + ")'>Delete</button>" + "</td>" + "</tr>";
    }

    document.getElementById("cartTable").innerHTML = tableText;
}

function deleteItemFromCart(key, row) {
    localStorage.removeItem(key);
    document.getElementById("tr" + row).style.display = "none";
    emptyCheck();
}

function emptyCheck() {
    if (0 === Object.keys(localStorage).length) {
        document.getElementById("fullCartDiv").innerHTML = "<p> Your cart is empty now. You can visit the <a href='products.php'>Products page</a> and choose some items.";
    }
}
