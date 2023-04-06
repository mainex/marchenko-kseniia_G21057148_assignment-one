class Offer {
    constructor(text) {
        this._id = text[0];
        this._title = text[1];
        this._dec = text[2];
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get dec() {
        return this._dec;
    }
}

let data;
let ALL_OFFERS = [];
let lines = [];
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function () {
    data = this.responseText;
    lines = data.split(';');
    for (let i = 0; i < lines.length; ++i) {
        let line = lines[i].split(',');
        if (line[0].length > 0) {
            ALL_OFFERS.push(new Offer(line));
        }
    }
    createOffersList();
}
xmlhttp.open("POST", "index.php");
xmlhttp.send();

function createOffersList() {
    let listOffers = document.querySelector('#listOffers');
    for (let i = 0; i < ALL_OFFERS.length; ++i) {
        let element = document.createElement("div");
        element.className = "offerCard" + ALL_OFFERS[i].type;
        element.innerHTML = "<h3>" + ALL_OFFERS[i].title + "</h3>" + "<p>" + ALL_OFFERS[i].dec + "</div>";
        listOffers.appendChild(element);
        console.log(ALL_OFFERS[i].title);
    }
}