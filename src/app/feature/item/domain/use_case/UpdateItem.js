class UpdateItem {

    constructor({ ItemRepository, Models }) {
        this.ItemRepository = new ItemRepository(Models);
    }

    execute = async function(input, token){
        this.validation(input, token);

        let item = this.ItemRepository.updateItem(input, token)
        return item;

    }

    validation = async function(input, token){
           
        if(!token) 
            throw new Error('invalid token');
        
        if(!input.title)
            throw new Error('title is invalid');
        
        if(!input.price)
            throw new Error('price is invalid');

    }

}
module.exports = UpdateItem;