class WorkoutController {

    constructor(
        createWorkout = get('CreateWorkout'),
        getWorkout = get('GetWorkout'),
        workoutPresent = get('WorkoutPresent')
    ) 
    {
        this.workoutPresent = workoutPresent;
        this.getWorkout = getWorkout;
        this.createWorkout = createWorkout;
        
    }

    create = async function (req, res) {
        let params = new this.workoutPresent(req.body);
        res.json(await new this.createWorkout().execute(params.toEntity()));
    }

    get = async function (req, res) {
        try{
            console.log(req.params.token);
            let workout = await new this.getWorkout().execute(req.params.token);
            res.json(workout);
        }catch(e) {
            res.status(400).json(e.message);
        }
    }

}

module.exports = WorkoutController;