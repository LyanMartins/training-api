const { Router } = require('express');
const AuthMiddeware = require('./app/middleware/AuthMiddleware');
const routes = require('express').Router();

class Routes extends Router {
    
    constructor(Resolver){
        super();
        this.Controller = Resolver.Controller;
        return this.prepareRoutes()
    }

    prepareRoutes = function() {
        
        routes.route('/user/:token?')
            .post( (req, res) => {
                new this.Controller.UserController().create(req, res);
            });
            
        routes.route('/login')
            .get( (req, res) => {
                new this.Controller.UserController().login(req, res);
            });
        
        routes.route('/workout/:token?')
            .post( (req, res) => {
                new this.Controller.WorkoutController().create(req, res);
            })
            .get( (req, res) => {
                new this.Controller.WorkoutController().get(req, res);
            });

        routes.route('/exercises/:exercisesId?')
            .post( (req, res) => {
                new this.Controller.ExercisesController().create(req, res);
            })
            .get( (req, res) => {
                new this.Controller.ExercisesController().get(req, res);
            });

        routes.route('/health')
            .get( new AuthMiddeware().auth, (req, res) => {
                
                return res.send(req.user);
            })

        return routes;
        
    }
}

module.exports = Routes;