const DiContainer = require('./DiContainer');
 
const diContainer = new DiContainer();

//List
diContainer.register('Routes', require('../../routes'));
diContainer.register('ListController', require('../../app/controller/ListController'));
diContainer.register('GetList', require('../../app/feature/list/domain/use_case/GetList'));
diContainer.register('CreateList', require('../../app/feature/list/domain/use_case/CreateList'));
diContainer.register('UpdateList', require('../../app/feature/list/domain/use_case/UpdateList'));
diContainer.register('DeleteList', require('../../app/feature/list/domain/use_case/DeleteList'));
diContainer.register('ListRepository', require('../../app/feature/list/data/repository/ListRepository'));
diContainer.register('ListModel', require('../../app/feature/list/data/models/ListModel'));
diContainer.register('ListEntity', require('../../app/feature/list/domain/entity/ListEntity'));
diContainer.register('InputListPresenter', require('../../app/feature/list/domain/presenter/InputListPresenter'));

//Item


const Routes = diContainer.get('Routes');
// Controller
const ListController = diContainer.get('ListController');
// USE CASE
const GetList = diContainer.get('GetList');
const CreateList = diContainer.get('CreateList');
const UpdateList = diContainer.get('UpdateList');
const DeleteList = diContainer.get('DeleteList');
// Repository
const ListRepository = diContainer.get('ListRepository');
// Models
const ListModel = diContainer.get('ListModel');
// Entity
const ListEntity = diContainer.get('ListEntity');
// Presenter
const InputListPresenter = diContainer.get('InputListPresenter');


const Controller = {
    ListController
}
const Feature = {
    List: {
        GetList,
        CreateList,
        ListEntity,
        UpdateList,
        DeleteList,
        InputListPresenter,
        Repository : {
            ListRepository,
            Models: { ListModel }
        }
    },
    Item: {

    }
}

module.exports = {
    Routes,
    Controller, 
    Feature,
}