class ListWorkout {

    constructor(
        WorkoutRepository = get('WorkoutRepository')
    ) {
        this.workoutRepository = WorkoutRepository;
    }

    execute = async function (userId) 
    {
        let validated = await this.validate(userId);

        if(!validated) throw new Error('User is not valid!');

        let workouts = await new this.workoutRepository().listWorkoutByUserId(userId);
        
        if(!workouts) throw new Error('Workout not found');

        return workouts;

    }

    
    validate = async function (userId) 
    {
        if(!userId) return false;

        return true;
    }

}
module.exports = ListWorkout;