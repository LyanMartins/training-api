
class ItemRepository {
    
    constructor({ ItemModel, ListModel }){
        this.ItemModel = ItemModel;
        this.ListModel = ListModel;
    }

    getAllItem = async function(listToken) {
        let item = await this.ItemModel.findAll({ 
            
            include: {
                model: this.ListModel,
                where: {
                    token: listToken
                },
            } 
        });
        return item;
    }

}

module.exports = ItemRepository;