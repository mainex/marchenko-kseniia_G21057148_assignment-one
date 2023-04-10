const query = window.location.search;
const params = new URLSearchParams(query);
const id = params.get('id');

function addToCart() {
    localStorage.setItem("cartItem" + id, id);
    alert("Added to Cart successfully.");
}

class Review {
    constructor(text) {
        this._id = text[0];
        this._user = text[1];
        this._product = text[2];
        this._title = text[3];
        this._description = text[4];
        this._rating = text[5];
    }

    get id() {
        return this._id;
    }

    get user() {
        return this._user;
    }

    get product() {
        return this._product;
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get rating() {
        return this._rating;
    }
}

let data;
let ALL_REVIEWS = [];
let lines = [];
let rating;
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function () {
    data = this.responseText;
    lines = data.split(';');
    rating = lines[0].split(',')[0];
    for (let i = 1; i < lines.length; ++i) {
        let line = lines[i].split(',');
        if (line[0].length > 0) {
            ALL_REVIEWS.push(new Review(line));
        }
    }
    createList();
    console.log(id);
}
xmlhttp.open("POST", "reviews.php?id=" + id);
xmlhttp.send();

function createList() {
    let list = document.querySelector('#listOfReviews');
    for (let i = 0; i < ALL_REVIEWS.length; ++i) {
        let element = document.createElement("div");
        element.innerHTML = "<div class=\"reviewCard\"" +
            "style =\"margin-bottom: 8px;\">" +
            "<h4 style=\"margin: 0;\">" + ALL_REVIEWS[i].title + "</h4> " +
            "<p style=\"margin: 0;\">" + ALL_REVIEWS[i].rating + "</p>" +
            "<p style=\"margin: 0;\">" + ALL_REVIEWS[i].description + "</p> " +
            "</div>";
        list.appendChild(element);
    }
}