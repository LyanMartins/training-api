class WorkoutRepository {

    constructor(WorkoutModel = get('WorkoutModel')) {
        this.workoutModel = WorkoutModel;
    }

    create = function(workout) {
        workout.created = Date.now();
        console.log(workout);
        return this.workoutModel.create(workout);
    }

    getWorkoutById = function(workoutId) {
        return this.workoutModel.findOne({
            where: {
                id: workoutId
            }
        })
    }
}

module.exports = WorkoutRepository;