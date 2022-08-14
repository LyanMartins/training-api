
class ListController {
    
    constructor({ 
        GetList, 
        CreateList, 
        UpdateList, 
        DeleteList, 
        ListEntity, 
        Repository, 
        InputListPresenter 
    }) {
        this.GetList = new GetList(Repository);
        this.CreateList = new CreateList(Repository);
        this.UpdateList = new UpdateList(Repository);
        this.DeleteList = new DeleteList(Repository);
        this.InputListPresenter = InputListPresenter;
        this.ListEntity = ListEntity;
        
    }

    get = async function (req, res) {
        let list = await this.GetList.execute();
        return res.json(list);
    }

    create = async function (req, res) {
        let request = new this.InputListPresenter(req.body.title);
        let list = await this.CreateList.execute(new this.ListEntity(request));
        return res.json(list);
    }
    
    update = async function (req, res) {
        let request = new this.InputListPresenter(req.body.title);
        console.log(this.UpdateList);
        let list = await this.UpdateList.execute(
            new this.ListEntity(request), 
            req.params.token
        );
        return res.json(list);
    }

    delete = async function (req, res) {
        let list = await this.DeleteList.execute(req.params.token);
        return res.json(list);
    }
}

module.exports = ListController;