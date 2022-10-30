class CreateWorkout {

    constructor(
        WorkoutRepository = get('WorkoutRepository')
    ) {
        this.workoutRepository = WorkoutRepository;
    }

    execute = async function (params) 
    {
        let workout = new this.workoutRepository().create(params)
        return workout;
    }

}

module.exports = CreateWorkout;