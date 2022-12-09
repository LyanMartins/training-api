class GetRunning {

    constructor(
        RunningRepository = get('RunningRepository')
    ) {
        this.runningRepository = RunningRepository;
    }

    execute = async function (userId) {
        let running = new this.runningRepository().getRunningByUserId(userId)
        return running;
    }

}

module.exports = GetRunning;