
class ItemEntity {

    title;
    price;
    quantity;
    checked;
    token;
    inActived;
    list;

    constructor(input) {
        this.title = input.title;
        this.price = input.price;
        this.quantity = input.quantity;
        this.checked = input.checked;
        this.inActived = input.inActived;
    }

}

module.exports = ItemEntity;