const ItemEntity = require("../feature/item/domain/entity/ItemEntity");

class ItemController {

    constructor({ GetItem, Repository }){
        console.log(Repository);
        this.GetItem = new GetItem(Repository)
    }

    get = async function (req, res) {
        
        let item = await this.GetItem.execute(req.params.token);
        res.json(item);
    }

}

module.exports = ItemController;