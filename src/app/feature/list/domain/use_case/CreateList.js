class CreateList {

    constructor({ ListRepository, Models }) {
        this.ListRepository = new ListRepository(Models)
    }

    execute = async function (input) {
        this.validation(input);

        let list = this.ListRepository.createList(input)

        return list;
    }

    validation = function (input) {
        
        if(!input.title)
            throw new Error('title is null');

    }
}

module.exports = CreateList;