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

}

module.exports = ItemRepository;