// const UserEntity = require("../entity/UserEntity");

class WorkoutPresent 
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

    toEntity = function(WorkoutEntity = get('WorkoutEntity')) {
        return new WorkoutEntity(this);
    }

    toArray = function() {
        return Array.from(this);
    }
}

module.exports = WorkoutPresent;