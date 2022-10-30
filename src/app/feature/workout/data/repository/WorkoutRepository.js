class WorkoutRepository {

    constructor(WorkoutModel = get('WorkoutModel')) {
        this.workoutModel = WorkoutModel;
    }

    create = function(workout) {
        workout.created = Date.now();
        console.log(workout);
        return this.workoutModel.create(workout);
    }
}

module.exports = WorkoutRepository;