class DeleteItem {

    constructor({ ItemRepository, Models }) {
        this.ItemRepository = new ItemRepository(Models)
    }

    execute = async function(input){
        this.validation(input);

        let item = await this.ItemRepository.deleteItem(input);
        return item;

    }

    validation = async function (input) {
        if(!input)
            throw new Error('invalid token')
    }

}

module.exports = DeleteItem;