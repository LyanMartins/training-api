class ListExercisesByWorkout 
{
    constructor(
        WorkoutRepository = get('WorkoutRepository')
    ){
        this.workoutRepository = WorkoutRepository
    }

    execute = async function(workoutId) 
    {
        let validated = this.validated(workoutId);
        
        if(!validated) throw new Error('Fields are invalid!');

        let exercise = new this.workoutRepository().listExercisesByWorkoutId(workoutId);

        return exercise;
    }

    validated = function(workoutId) 
    {
        if(!workoutId) return false;

        return true;
    }
}

module.exports = ListExercisesByWorkout;