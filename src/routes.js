const { Router } = require('express');
const routes = require('express').Router();

class Routes extends Router {
    
    constructor(Resolver){
        super();
        this.Controller = Resolver.Controller;
        return this.prepareRoutes(Resolver.Feature)
    }

    prepareRoutes = function(feature) {
        routes.route('/list/:token?')
            .get( (req, res) => { 
                new this.Controller.ListController(feature.List).get(req, res) 
            })
            .post( (req, res) => {
                new this.Controller.ListController(feature.List).create(req, res) 
            })
            .put( (req, res) =>{
                new this.Controller.ListController(feature.List).update(req, res)
            })
            .delete( (req, res) => {
                new this.Controller.ListController(feature.List).delete(req, res)
            })

        routes.route('/item/:token?')
            .get( (req, res) => {
                console.log(feature);
                new this.Controller.ItemController(feature.Item).get(req, res)
            })
        return routes;
        
    }
}

module.exports = Routes;