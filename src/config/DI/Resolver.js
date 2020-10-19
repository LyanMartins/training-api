const DiContainer = require('./DiContainer');
 
const diContainer = new DiContainer();


diContainer.register('Routes', require('../../routes'));

//List
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
diContainer.register('ItemController', require('../../app/controller/ItemController'));
diContainer.register('GetItem', require('../../app/feature/item/domain/use_case/GetItem'));
diContainer.register('ItemRepository', require('../../app/feature/item/data/repository/ItemRepository'));
diContainer.register('ItemModel', require('../../app/feature/item/data/models/ItemModel'));
diContainer.register('ItemEntity', require('../../app/feature/item/domain/entity/ItemEntity'));


const Routes = diContainer.get('Routes');
// Controller
const ListController = diContainer.get('ListController');
const ItemController = diContainer.get('ItemController');
// USE CASE
const GetList = diContainer.get('GetList');
const CreateList = diContainer.get('CreateList');
const UpdateList = diContainer.get('UpdateList');
const DeleteList = diContainer.get('DeleteList');
const GetItem = diContainer.get('GetItem');
// Repository
const ListRepository = diContainer.get('ListRepository');
const ItemRepository = diContainer.get('ItemRepository');
// Models
const ListModel = diContainer.get('ListModel');
const ItemModel = diContainer.get('ItemModel');
// Entity
const ListEntity = diContainer.get('ListEntity');
const ItemEntity = diContainer.get('ItemEntity');
// Presenter
const InputListPresenter = diContainer.get('InputListPresenter');


const Controller = {
    ListController,
    ItemController
}

const Models = {
    ListModel,
    ItemModel
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
            Models
        }
    },
    Item: {
        GetItem,
        ItemEntity,
        Repository : {
            ItemRepository,
            Models
        }
    }
}

module.exports = {
    Routes,
    Controller, 
    Feature,
}