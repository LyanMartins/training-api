class GetExercises 
{
    constructor() {

    }

    execute = async function(exercisesId) 
    {
        let validated = this.validated(exercisesId);
        
        if(!validated) throw new Error('Fields are not valid');
    }

    validated = function(execisesId)
    {
        if(!execisesId) return false;

        return true
    }
}