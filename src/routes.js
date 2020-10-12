const { Router } = require('express');
const routes = require('express').Router();
const { ListController } = require('../src/config/DI/Resolver');

class Routes extends Router {
    
    constructor(Resolver){
        super();  
        return routes.get('/', (req, res) => { new Resolver.ListController(Resolver).getList(req, res) })
    }
}

module.exports = Routes;