class Item {
    constructor(text) {
        this._type = text[0];
        this._color = text[1];
        this._description = text[2];
        this._value = text[3];
        this._image = text[4];
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
}

let ALL_ITEMS = [
    new Item(['UCLan Hoodie', 'Purple', 'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks', ' Only Ј39.99', 'images/items/hoodies/hoodie (1).jpg']),
    new Item(['UCLan Hoodie', 'Light Blue', 'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks', ' Only Ј39.99', 'images/items/hoodies/hoodie (2).jpg']),
    new Item(['UCLan Hoodie', 'Green', 'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks', ' Only �39.99', 'images/items/hoodies/hoodie (3).jpg']),
    new Item(['UCLan Hoodie', 'Green', 'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks', ' Only Ј39.99', 'images/items/hoodies/hoodie (3).jpg']),
    new Item(['UCLan Hoodie', 'Dark Grey', 'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks', ' Only Ј39.99', 'images/items/hoodies/hoodie (4).jpg']),
    new Item(['UCLan Hoodie', 'Black', 'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks', ' Only Ј39.99', 'images/items/hoodies/hoodie (5).jpg']),
    new Item(['UCLan Hoodie', 'Salmon', 'cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks', ' Only Ј39.99', 'images/items/hoodies/hoodie (6).jpg']),
    new Item(['UCLan Hoodie','Burgundy','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only Ј39.99','images/items/hoodies/hoodie (7).jpg']),
    new Item(['UCLan Hoodie','Light Grey','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only Ј39.99','images/items/hoodies/hoodie (8).jpg']),
    new Item(['UCLan Hoodie','Slate Blue','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only Ј39.99','images/items/hoodies/hoodie (9).jpg']),
    new Item(['UCLan Hoodie','Orange','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only Ј39.99','images/items/hoodies/hoodie (10).jpg'])
];