
class ItemController {

    constructor({ 
        GetItem, 
        CreateItem,
        Repository,
        InputItemPresenter 
    }){
        this.GetItem = new GetItem(Repository)
        this.CreateItem = new CreateItem(Repository)
        this.InputItemPresenter = InputItemPresenter;
    }

    get = async function (req, res) {

        let item = await this.GetItem.execute(req.params.token);
        res.json(item);
    }
    
    create = async function(req, res) {

        let input  = new this.InputItemPresenter(req.body);
        let item = await this.CreateItem.execute(input, req.params.token);
        res.json(item);
    }

}

module.exports = ItemController;