class WorkoutEntity 
{
    userId;
    title;
    modifield;
    deleted;
    created;
    breakTime;

    constructor(input) 
    {
        this.userId = input.userId;
        this.title = input.title;
        this.modifield = input.modifield;
        this.deleted = input.deleted;
        this.created = input.created;
        this.breakTime = input.breakTime;
    }
}

module.exports = WorkoutEntity;