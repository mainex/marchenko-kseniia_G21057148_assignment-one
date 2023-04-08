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
    createList();
}
xmlhttp.open("POST", "productstable.php");
xmlhttp.send();

function createList() {
    let list = document.querySelector('#list');
    for (let i = 0; i < ALL_ITEMS.length; ++i) {
        let element = document.createElement("div");
        element.className = "itemCard" + ALL_ITEMS[i].type;
        element.id = "itemCard" + i;
        element.innerHTML = "<img src=\"resources/" + ALL_ITEMS[i].image + "\" alt=\"" + ALL_ITEMS[i].description + "\" width=\"100%\">" + "<h3>" + ALL_ITEMS[i].title + "</h3>" + "<p>" + ALL_ITEMS[i].description + " " + "<a href='item.php?id=" + ALL_ITEMS[i].id + "'>more</a>" + "</p>" + "<div style='display: flex;'><h4 style='margin-right: 10px;'>" + ALL_ITEMS[i].value + "</h4>" + "<button class=\"buyBtn\" type=\"button\" onclick=\"addToCart(" + ALL_ITEMS[i].id + ")\">Buy</button>" + "</div>";
        list.appendChild(element);
    }
}

function updateList(filter) {
    document.getElementById("all").classList.remove('active');
    document.getElementById("UCLanHoodie").classList.remove('active');
    document.getElementById("UCLanLogoJumper").classList.remove('active');
    document.getElementById("UCLanLogoTshirt").classList.remove('active');
    document.getElementById(filter.replace(/ /g, '')).classList.add('active');

    for (let i = 0; i < ALL_ITEMS.length; ++i) {
        let item = document.getElementById("itemCard" + i);
        if ("all" === filter || "itemCard" + filter === item.className) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    }
}

function addToCart(id) {
    localStorage.setItem("cartItem" + id, id);
    alert("Added to Cart successfully.");
}