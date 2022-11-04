class GetExercises 
{
    constructor(
        ExercisesRepository = get('ExercisesRepository')
    ) {
        this.exercisesRepository = ExercisesRepository;
    }

    execute = async function(exercisesId) 
    {
        let validated = this.validated(exercisesId);
        
        if(!validated) throw new Error('Fields are not valid');

        let exercise = new this.exercisesRepository().getExercisesById(exercisesId);

        return exercise;

    }

    validated = function(execisesId)
    {
        if(!execisesId) return false;

        return true
    }
}