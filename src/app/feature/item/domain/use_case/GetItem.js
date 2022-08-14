class GetItem {

    constructor({ ItemRepository, Models }) {
        this.ItemRepository = new ItemRepository(Models)
    }

    execute = async function (input) {
        let item = await this.ItemRepository.getAllItem(input);
        return item;
    }

    validation = function (input) {
        if(!input)
            throw new Error('token is invalid');
    }
}

module.exports = GetItem;