const { nanoid } = require('nanoid')

class ListRepository {
    
    constructor({ ListModel }){
        this.ListModel = ListModel;
        console.log("repository");
    }

    getAllList = async function() {
        return await this.ListModel.findAll({ where: { in_actived: true }});
    }

    getList = async function(listToken) {
        return await this.ListModel.findOne({ where: { token: listToken } });
    }

    createList = async function (list) {
        list.token = nanoid(6);
        let newList = await this.ListModel.create(list);
        return newList;
    }

    updateList = async function (newList, listToken) {
        let list =  await this.ListModel.findOne({ where: { token: listToken } });

        if(!list) return false;

        newList.token = list.token
        console.log(newList);
        list = await this.ListModel.update( newList, {
            where: { token: listToken }
        });
        
        return list;
    }    

    deleteList = async function (listToken) {
        let list = await this.ListModel.update({ in_actived: false },{
            where: { token: listToken }
        });
        
        return list;
    }
}

module.exports = ListRepository;