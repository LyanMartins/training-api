class GetWorkout {

    constructor(
        WorkoutRepository = get('WorkoutRepository')
    ) {
        this.workoutRepository = WorkoutRepository;
    }

    execute = async function (workoutId) {
        
        let validated = await this.validate(workoutId);

        if(!validated) throw new Error('Workout is not valid!');

        let workout = await new this.workoutRepository().getWorkoutById(workoutId);


        if(!workout) throw new Error('Workout not found');

        return workout;

    }

    validate = async function (workoutId) {
        if(!workoutId) return false;

        return true;
    }

}
module.exports = GetWorkout;