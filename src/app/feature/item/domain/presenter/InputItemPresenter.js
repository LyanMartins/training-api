
class InputItemPresenter {

    title;
    price;
    quantity;
    checked;
    in_actived;	
    created_at;

    constructor(input) {
        this.title = input.title;
        this.price = input.price;
        this.quantity = input.quantity;
        this.checked = input.checked;
        this.in_actived = input.in_actived;
        this.created_at = input.created_at;
    }

}

module.exports = InputItemPresenter;