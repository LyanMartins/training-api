const { Router } = require('express');
const DiContainer = require('./DiContainer');
 
 
const diContainer = new DiContainer();
diContainer.register('Routes', require('../../routes'));
diContainer.register('ListController', require('../../app/controller/ListController'));
diContainer.register('GetList', require('../../app/domain/use_case/GetList'));

const Routes = diContainer.get('Routes');
const ListController = diContainer.get('ListController');
const GetList = diContainer.get('GetList');

module.exports = {
    Routes,
    ListController,
    GetList,
}