
class ListController {
    
    constructor({ GetList }) {
        this.GetList = GetList;
    }

    getList = function (req, res) {
        console.log(this.GetList);
        res.send({"ok":'true'});
    }
        

}

module.exports = ListController;