class ExercisesPresent {

    workoutId;
    title;
    serie;
    repetition;
    modifield;
    deleted;

    constructor(input) {
        this.workoutId = input.workoutId;
        this.title = input.title;
        this.serie = input.serie;
        this.repetition = input.repetition;
        this.modifield = input?.modifield;
        this.deleted = input?.deleted;        
    }
    
    toEntity = function(ExercisesEntity = get('ExercisesEntity')) {
        return new ExercisesEntity(this);
    }
    
    toArray = function() {
        return Array.from(this);
    }

}

module.exports = ExercisesPresent;