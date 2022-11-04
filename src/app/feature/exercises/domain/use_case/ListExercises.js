class ListExercises {

    constructor(
        ExercisesRepository = get('ExercisesRepository')
    ) {
        this.exercisesRepository = ExercisesRepository;
    }

    execute = async function(workoutId)
    {
        let validated = this.validated(workoutId);
        if(!validated) throw new Error("Fields are invalid");

        let exercises = new this.exercisesRepository().listAllExercisesByWorkoutId(workoutId);

        return exercises;

    }

    validated = function(workoutId) 
    {
        if(!workoutId) return false;
    }
}

module.exports = ListExercises;