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

        console.log("aqio: "+workoutId);
        let exercise = await new this.workoutRepository().listExercisesByWorkoutId(workoutId);
        console.log(exercise);
        return exercise;
    }

    validated = function(workoutId) 
    {
        if(!workoutId) return false;

        return true;
    }
}

module.exports = ListExercisesByWorkout;