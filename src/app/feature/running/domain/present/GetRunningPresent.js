class GetRunningPresent {
 

    constructor(input) {
        
    }

    toEntity = function(RunningEntity = get('RunningEntity')) {
        return new RunningEntity(this);
    }

    toArray = function() {
        return Array.from(this);
    }

}

module.exports = GetRunningPresent;