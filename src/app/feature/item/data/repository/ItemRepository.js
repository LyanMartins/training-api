const { nanoid } = require('nanoid')

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

    createItem =  async function(item, listToken) {

        let list = await this.ListModel.findOne({ where: { token:listToken }});
        if(!list) return false;

        item.ListId = list.id;

        item.token = nanoid(6);
        console.log(item);
        let newItem = await this.ItemModel.create(
            item,{
                include: [ this.ListModel ]
            }    
        );

        return newItem;
    }

    updateItem = async function (item, itemToken) {

        let getItem =  await this.ItemModel.findOne({ where: { token: itemToken } });
        console.log(getItem);
        if(!getItem) return false;

        item.token = getItem.token;

        item = await this.ItemModel.update( item, {
            where: { token: itemToken }
        });
        
        return item;
    }

    deleteItem = async function(itemToken) {
        
        let item = await this.ItemModel.update({ in_actived: false },{
            where: { token: itemToken }
        });
        
        return item;

    }
    

}

module.exports = ItemRepository;