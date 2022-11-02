class ExercisesController {

    constructor(
        CreateExercises = get('CreateExercises'),
        ExercisesPresent = get('ExercisesPresent')
    ) {
        this.createExercises = CreateExercises;
        this.exercisesPresent = ExercisesPresent;
    }

    create = async function(req, res) {
        try{
            let params = new this.exercisesPresent(req.body);
            res.json(await new this.createExercises().execute(params.toEntity()));
        }catch(e) {
            res.status(400).json(e.message)
        }
    }

}

module.exports = ExercisesController;