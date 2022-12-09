const Workout = require("../../../workout/data/models/WorkoutModel");
const { Op } = require("sequelize");

class RunningRepository {

    constructor(RunningModel = get('RunningModel')) {
        this.runningModel = RunningModel;
    }

    getRunningByUserId = function(userId) {
        let user = this.runningModel.findOne(
        {
            include:{
                model: Workout,
                where: {
                    userId: userId
                }
            },
            where: {
                endDate: null,
            },
            raw: true,
        });
        
        return user;
    }

}

module.exports = RunningRepository;