class WorkoutController {

    constructor(
        createWorkout = get('CreateWorkout'),
        workoutPresent = get('WorkoutPresent')
    ) 
    {
        this.workoutPresent = workoutPresent;
        this.createWorkout = createWorkout;
    }

    create = async function (req, res) {
        let params = new this.workoutPresent(req.body);
        res.json(await new this.createWorkout().execute(params.toEntity()));
    }

}

module.exports = WorkoutController;