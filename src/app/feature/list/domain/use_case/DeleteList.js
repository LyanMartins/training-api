class DeleteList {

    constructor( { ListRepository, Models } ){
        this.ListRepository = new ListRepository(Models);
    }

    execute = async function(input){
        this.validation(input);

        let list = await this.ListRepository.deleteList(input);

        return list;
    }

    validation = function (input) {
        if(!input)
            throw new Error('token is null');
    }

}

module.exports = DeleteList;