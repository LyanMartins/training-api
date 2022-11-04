class ExercisesController {

    constructor(
        CreateExercises = get('CreateExercises'),
        GetExercises = get('GetExercises'),
        ExercisesPresent = get('ExercisesPresent')
    ) {
        this.createExercises = CreateExercises;
        this.getExercises = GetExercises;
        this.exercisesPresent = ExercisesPresent;
    }

    create = async function(req, res) 
    {
        try{
            let params = new this.exercisesPresent(req.body);
            res.json(await new this.createExercises().execute(params.toEntity()));
        }catch(e) {
            res.status(400).json(e.message)
        }
    }

    get = async function (req, res) 
    {
        try {
            res.json(await new this.getExercises().get(req.params.exercisesId));
        } catch (e) {
            res.status(400).json(e.message);
        }
    }

    list = async function(req, res) 
    {
        try {
            console.log(req.params.workoutId)
        } catch (e) {
            res.status(400).json(e.message);
        }
    }

}

module.exports = ExercisesController;