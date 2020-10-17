class UpdateList {

    constructor({ ListRepository, Models }) {
        this.ListRepository = new ListRepository(Models)
    }


    execute = async function (input, listToken) {
        this.validation(input, listToken);

        let list = this.ListRepository.updateList(input, listToken)

        return list;
    }

    validation = function (input, listToken) {
        
        if(!listToken)
            throw new Error('token is null');

        if(!input.title)
            throw new Error('title is null');

    }
}

module.exports = UpdateList;