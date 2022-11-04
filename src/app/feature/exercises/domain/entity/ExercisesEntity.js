class ExercisesEntity {

    id;
    workoutId;
    title;
    serie;
    repetition;
    created;
    modifield;
    deleted;


    constructor(input) {
        this.workoutId = input.workoutId;
        this.title = input.title;
        this.serie = input.serie;
        this.repetition = input.repetition;
        this.created = input.created;
        this.modifield = input.modifield;
        this.deleted = input.deleted; 
    }
    
}

module.exports = ExercisesEntity;