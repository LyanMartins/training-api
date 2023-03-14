class WorkoutController {

    constructor(
        createWorkout = get('CreateWorkout'),
        getWorkout = get('GetWorkout'),
        listWorkout = get('ListWorkout'),
        listExercisesByWorkout = get('ListExercisesByWorkout'),
        workoutPresent = get('WorkoutPresent')
    ) 
    {
        this.workoutPresent = workoutPresent;
        this.getWorkout = getWorkout;
        this.listWorkout = listWorkout;
        this.listExercisesByWorkout = listExercisesByWorkout;
        this.createWorkout = createWorkout;
        
    }

    create = async function (req, res) 
    {
        let params = new this.workoutPresent(req.body);
        res.json(await new this.createWorkout().execute(params.toEntity()));
    }

    get = async function (req, res) 
    {
        try{
            let workout = await new this.getWorkout().execute(req.params.token);
            res.json(workout);
        }catch(e) {
            res.status(400).json(e.message);
        }
    }
    
    list = async function(req, res) {
        try{
            let workouts = await new this.listWorkout().execute(req.params.userId);
            res.json(workouts);
        }catch(e) {
            res.status(400).json(e.message);
        }
    }

    listExercisesByWorkoutId = async function(req, res) 
    {
        try {
            console.log(req.params.workoutId)
            let execises = new this.listExercisesByWorkout().execute(req.params.workoutId);
            res.json(execises);
        } catch (e) {
            res.status(400).json(e.message);
        }
    }

}

module.exports = WorkoutController;