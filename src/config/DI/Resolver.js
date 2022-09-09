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
diContainer.register('CreateItem', require('../../app/feature/item/domain/use_case/CreateItem'));
diContainer.register('UpdateItem', require('../../app/feature/item/domain/use_case/UpdateItem'));
diContainer.register('DeleteItem', require('../../app/feature/item/domain/use_case/DeleteItem'));
diContainer.register('ItemRepository', require('../../app/feature/item/data/repository/ItemRepository'));
diContainer.register('ItemModel', require('../../app/feature/item/data/models/ItemModel'));
diContainer.register('ItemEntity', require('../../app/feature/item/domain/entity/ItemEntity'));
diContainer.register('InputItemPresenter', require('../../app/feature/item/domain/presenter/InputItemPresenter'));

//user
diContainer.register('UserController', require('../../app/controller/UserController'));
diContainer.register('UserRepository', require('../../app/feature/user/data/repository/UserRepository'));
diContainer.register('UserModel', require('../../app/feature/user/data/models/UserModel'));
diContainer.register('UserEntity', require('../../app/feature/user/domain/entity/UserEntity'));
diContainer.register('UserPresent', require('../../app/feature/user/domain/present/UserPresent'));
diContainer.register('CreateUser', require('../../app/feature/user/domain/use_case/CreateUser'));

const Routes = diContainer.get('Routes');
// // Controller
// const ListController = diContainer.get('ListController');
// const ItemController = diContainer.get('ItemController');
// // USE CASE
// const GetList = diContainer.get('GetList');
// const CreateList = diContainer.get('CreateList');
// const UpdateList = diContainer.get('UpdateList');
// const DeleteList = diContainer.get('DeleteList');
// const GetItem = diContainer.get('GetItem');
// const CreateItem = diContainer.get('CreateItem');
// const UpdateItem = diContainer.get('UpdateItem');
// const DeleteItem = diContainer.get('DeleteItem');
// // Repository
// const ListRepository = diContainer.get('ListRepository');
// const ItemRepository = diContainer.get('ItemRepository');
// // Models
// const ListModel = diContainer.get('ListModel');
// const ItemModel = diContainer.get('ItemModel');
// // Entity
// const ListEntity = diContainer.get('ListEntity');
// const ItemEntity = diContainer.get('ItemEntity');
// // Presenter
// const InputListPresenter = diContainer.get('InputListPresenter');
// const InputItemPresenter = diContainer.get('InputItemPresenter');


const Controller = {
    ListController: diContainer.get('ListController'),
    ListController: diContainer.get('ListController'),
    UserController: diContainer.get('UserController')
}

// const Models = {
//     ListModel,
//     ItemModel
// }

// const Feature = {
//     List: {
//         GetList,
//         CreateList,
//         ListEntity,
//         UpdateList,
//         DeleteList,
//         InputListPresenter,
//         Repository : {
//             ListRepository,
//             Models
//         }
//     },
//     Item: {
//         GetItem,
//         CreateItem,
//         UpdateItem,
//         DeleteItem,
//         ItemEntity,
//         InputItemPresenter,
//         Repository : {
//             ItemRepository,
//             Models
//         }
//     },
//     User: {
//         UserPresent: diContainer.get('UserPresent'),
//         CreateUser: diContainer.get('CreateUser')
//     }
// }

get = function(dependence) {
    return diContainer.get(dependence)
}

module.exports = {
    Routes,
    Controller
}