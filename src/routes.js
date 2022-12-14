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
        
        routes.route('/login')
            .post((req, res) => {
                new this.Controller.UserController().login(req, res);
            });

        routes.route('/user/:token?')
            .post( new AuthMiddeware().auth, (req, res) => {
                new this.Controller.UserController().create(req, res);
            });
        
        routes.route('/workout/:token?')
            .post( new AuthMiddeware().auth, (req, res) => {
                new this.Controller.WorkoutController().create(req, res);
            })
            .get( new AuthMiddeware().auth, (req, res) => {
                new this.Controller.WorkoutController().get(req, res);
            });
        
        routes.route('/workout/user/:userId/list')
            .get(new AuthMiddeware().auth, (req, res) => {
                new this.Controller.WorkoutController().list(req, res)
            })
        
        routes.route('/workout/:workoutId/exercises')
            .get(new AuthMiddeware().auth ,( req, res ) => {
                new this.Controller.WorkoutController().listExercisesByWorkoutId(req, res)
            })

        routes.route('/exercises/:exercisesId?')
            .post( new AuthMiddeware().auth, (req, res) => {
                new this.Controller.ExercisesController().create(req, res);
            })
            .get( (req, res) => {
                new this.Controller.ExercisesController().get(req, res);
            });

        routes.route('/health')
            .get( new AuthMiddeware().auth, (req, res) => {
                return res.send(req.user);
            })

        routes.route('/running/:userId')
            .get(new AuthMiddeware().auth, (req, res) => {
                new this.Controller.RunningController().get(req, res)
            })

        return routes;
        
    }
}

module.exports = Routes;