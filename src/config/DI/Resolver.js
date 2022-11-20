const DiContainer = require('./DiContainer');
 
const diContainer = new DiContainer();


diContainer.register('Routes', '../../routes');


//user
diContainer.register('UserController', '../../app/controller/UserController');
diContainer.register('UserRepository', '../../app/feature/user/data/repository/UserRepository');
diContainer.register('UserModel', '../../app/feature/user/data/models/UserModel');
diContainer.register('UserEntity', '../../app/feature/user/domain/entity/UserEntity');
diContainer.register('UserPresent', '../../app/feature/user/domain/present/UserPresent');
diContainer.register('LoginPresent', '../../app/feature/user/domain/present/LoginPresent');
diContainer.register('CreateUser', '../../app/feature/user/domain/use_case/CreateUser');
diContainer.register('Login', '../../app/feature/user/domain/use_case/Login');

// Workout
diContainer.register('WorkoutController', '../../app/controller/WorkoutController');
diContainer.register('WorkoutRepository', '../../app/feature/workout/data/repository/WorkoutRepository');
diContainer.register('WorkoutModel', '../../app/feature/workout/data/models/WorkoutModel');
diContainer.register('WorkoutEntity', '../../app/feature/workout/domain/entity/WorkoutEntity');
diContainer.register('WorkoutPresent', '../../app/feature/workout/domain/present/WorkoutPresent');
diContainer.register('CreateWorkout', '../../app/feature/workout/domain/use_case/CreateWorkout');
diContainer.register('GetWorkout', '../../app/feature/workout/domain/use_case/GetWorkout');
diContainer.register('ListWorkout', '../../app/feature/workout/domain/use_case/ListWorkout');
diContainer.register('ListExercisesByWorkout', '../../app/feature/workout/domain/use_case/ListExercisesByWorkout');

// Exercises
// Workout
diContainer.register('ExercisesController', '../../app/controller/ExercisesController');
diContainer.register('ExercisesRepository', '../../app/feature/exercises/data/repository/ExercisesRepository');
diContainer.register('ExercisesModel', '../../app/feature/exercises/data/models/ExercisesModel');
diContainer.register('ExercisesEntity', '../../app/feature/exercises/domain/entity/ExercisesEntity');
diContainer.register('ExercisesPresent', '../../app/feature/exercises/domain/present/ExercisesPresent');
diContainer.register('CreateExercises', '../../app/feature/exercises/domain/use_case/CreateExercises');
diContainer.register('GetExercises', '../../app/feature/exercises/domain/use_case/GetExercises');

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