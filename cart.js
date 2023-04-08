let tableText = "<tr>" + "<th>№</th>" + "<th></th>" + "<th>Product</th>" + "<th></th>" + "</tr>";
let keys = Object.keys(localStorage), length = keys.length;

class Item {
    constructor(text) {
        this._type = text[0];
        this._description = text[1];
        this._value = text[2];
        this._image = text[3];
        this._title = text[4];
        this._id = text[5];
    }

    get type() {
        return this._type;
    }

    get description() {
        return this._description;
    }

    get value() {
        return this._value;
    }

    get image() {
        return this._image;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }
}

let url = "orders.php?ids=";
for (let i = 1; i < length; ++i) {
    let itemId = localStorage.getItem(keys[i - 1]);
    url += itemId + ",";
}
url += localStorage.getItem(keys[length - 1]);
console.log("url: " + url);
let data;
let ALL_ITEMS = [];
let lines = [];
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function () {
    data = this.responseText;
    lines = data.split(';');
    for (let i = 0; i < lines.length; ++i) {
        let line = lines[i].split(',');
        if (line[0].length > 0) {
            ALL_ITEMS.push(new Item(line));
        }
    }
    emptyCheck();
    console.log(ALL_ITEMS);

    for (let i = 1; i <= ALL_ITEMS.length; ++i) {
        //let image = ALL_ITEMS[i].image, title = item[1], id = item[2], value = item[3];
        tableText += "<tr id='tr" + i + "'><td style='width: 5%'>" + i + "</td><td><img style='width: 200px;' src=\"resources/" + ALL_ITEMS[i - 1].image + "\" alt =\"" + ALL_ITEMS[i - 1].title + "\" width =\"300\"></td><td style='width: 50%'><a href='item.php?id=" + ALL_ITEMS[i - 1].id + "'>" + ALL_ITEMS[i - 1].title + "</td><td>" + ALL_ITEMS[i - 1].value + "</td><td><button class=\"deleteBtn\" onclick='deleteItemFromCart(\"cartItem\"+" + ALL_ITEMS[i - 1].id + ", " + i + ")'>Delete</button></td></tr>";
        console.log(i);
    }


    document.getElementById("cartTable").innerHTML = tableText;
}
xmlhttp.open("POST", url);
xmlhttp.send();
console.log(ALL_ITEMS);

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
