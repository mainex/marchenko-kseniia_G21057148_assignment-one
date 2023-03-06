class Item {
    constructor(text, number) {
        this._type = text[0];
        this._color = text[1];
        this._description = text[2];
        this._value = text[3];
        this._image = text[4];
        this._id = number;
    }

    get type() {
        return this._type;
    }

    get color() {
        return this._color;
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
}

let ALL_ITEMS = [];
let lines = [];
fetch("resources/items.csv").then(response => {
    response.text().then(response => {
        lines = response.split('\n');
        for (let i = 0; i < lines.length; ++i) {
            let line = lines[i].split(',');
            if (line[0].length > 0) {
                ALL_ITEMS.push(new Item(line));
            }
        }
        createList();
    })
});

function createList() {
    let list = document.querySelector('#list');
    for (let i = 0; i < ALL_ITEMS.length; ++i) {
        let element = document.createElement("div");
        element.className = "itemCard" + ALL_ITEMS[i].type;
        element.id = "itemCard" + i;
        element.innerHTML =
            "<img src=\"resources/" + ALL_ITEMS[i].image + "\" alt=\"" + ALL_ITEMS[i].description + "\" width=\"100%\">" +
            "<h3>" + ALL_ITEMS[i].color + " " + ALL_ITEMS[i].type + "</h3>" +
            "<p>" + ALL_ITEMS[i].description + " " +
            "<a href='item.html?id=" + i + "&type=" + ALL_ITEMS[i].type + "&color=" + ALL_ITEMS[i].color +
            "&description=" + ALL_ITEMS[i].description + "&value=" + ALL_ITEMS[i].value +
            "&image=" + ALL_ITEMS[i].image + "'>more</a>" + "</p>" +
            "<div style='display: flex;'><h4 style='margin-right: 10px;'>" + ALL_ITEMS[i].value + "</h4>" +
            "<button class=\"buyBtn\" type=\"button\" onclick=\"addToCart(" + i + ")\">Buy</button>" +
            "</div>";
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

function addToCart(number) {
    const item = {
        image: ALL_ITEMS[number].image,
        name: ALL_ITEMS[number].color + " " + ALL_ITEMS[number].type,
        value: ALL_ITEMS[number].value,
        description: ALL_ITEMS[number].description,
        color: ALL_ITEMS[number].color,
        type: ALL_ITEMS[number].type,
    }
    console.log(number);
    localStorage.setItem("cartItem" + localStorage.length, JSON.stringify(item));
    alert("Added to Cart successfully.")
}