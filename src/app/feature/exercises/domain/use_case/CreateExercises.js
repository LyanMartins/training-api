class CreateExercises {

    constructor(
        ExercisesRepository = get('ExercisesRepository')
    ) {
        this.exercisesRepository = ExercisesRepository;
    }
    
    execute = async function(params, workoutId) {

        let validate = await this.validated(params, workoutId);

        if(!validate) throw new Error('Fields is invalid');

        let exercises = new this.exercisesRepository().create(params);
        return exercises;
    }

    validated = function(params){
        if(!params.workoutId) return false

        return true;
    }



}

module.exports = CreateExercises;