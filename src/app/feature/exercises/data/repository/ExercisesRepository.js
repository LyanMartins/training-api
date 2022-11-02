class ExercisesRepository {

    constructor(
        ExercisesModel = get('ExercisesModel')
    ) {
        this.exercisesModel = ExercisesModel;
    }

    create = function(exercises) {
        exercises.create = Date.now();
        return this.exercisesModel.create(exercises);
    }
    
}
module.exports = ExercisesRepository;