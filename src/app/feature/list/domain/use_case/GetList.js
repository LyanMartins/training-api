class GetList {

    constructor({ ListRepository, Models }) {
        this.ListRepository = new ListRepository(Models)
    }

    execute() {
        let list = this.ListRepository.getList();
        return list;
    }

}

module.exports = GetList;