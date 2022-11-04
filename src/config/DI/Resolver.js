const DiContainer = require('./DiContainer');
 
const diContainer = new DiContainer();


diContainer.register('Routes', require('../../routes'));


//user
diContainer.register('UserController', require('../../app/controller/UserController'));
diContainer.register('UserRepository', require('../../app/feature/user/data/repository/UserRepository'));
diContainer.register('UserModel', require('../../app/feature/user/data/models/UserModel'));
diContainer.register('UserEntity', require('../../app/feature/user/domain/entity/UserEntity'));
diContainer.register('UserPresent', require('../../app/feature/user/domain/present/UserPresent'));
diContainer.register('LoginPresent', require('../../app/feature/user/domain/present/LoginPresent'));
diContainer.register('CreateUser', require('../../app/feature/user/domain/use_case/CreateUser'));
diContainer.register('Login', require('../../app/feature/user/domain/use_case/Login'));

// Workout
diContainer.register('WorkoutController', require('../../app/controller/WorkoutController'));
diContainer.register('WorkoutRepository', require('../../app/feature/workout/data/repository/WorkoutRepository'));
diContainer.register('WorkoutModel', require('../../app/feature/workout/data/models/WorkoutModel'));
diContainer.register('WorkoutEntity', require('../../app/feature/workout/domain/entity/WorkoutEntity'));
diContainer.register('WorkoutPresent', require('../../app/feature/workout/domain/present/WorkoutPresent'));
diContainer.register('CreateWorkout', require('../../app/feature/workout/domain/use_case/CreateWorkout'));
diContainer.register('GetWorkout', require('../../app/feature/workout/domain/use_case/GetWorkout'));

// Exercises
// Workout
diContainer.register('ExercisesController', require('../../app/controller/ExercisesController'));
diContainer.register('ExercisesRepository', require('../../app/feature/exercises/data/repository/ExercisesRepository'));
diContainer.register('ExercisesModel', require('../../app/feature/exercises/data/models/ExercisesModel'));
diContainer.register('ExercisesEntity', require('../../app/feature/exercises/domain/entity/ExercisesEntity'));
diContainer.register('ExercisesPresent', require('../../app/feature/exercises/domain/present/ExercisesPresent'));
diContainer.register('CreateExercises', require('../../app/feature/exercises/domain/use_case/CreateExercises'));
diContainer.register('GetExercises', require('../../app/feature/exercises/domain/use_case/GetExercises'));

const Routes = diContainer.get('Routes');

const Controller = {
    UserController: diContainer.get('UserController'),
    WorkoutController: diContainer.get('WorkoutController'),
    ExercisesController: diContainer.get('ExercisesController')
}

get = function(dependence) {
    return diContainer.get(dependence)
}

module.exports = {
    Routes,
    Controller
}