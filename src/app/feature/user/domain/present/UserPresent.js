// const UserEntity = require("../entity/UserEntity");

class UserPresent {
    name;
    email;
    password;
    deleted;

    constructor(input) 
    {
        this.name = input.name;
        this.email = input.email;
        this.password = input.password;
        this.deleted = input?.deleted;
    }

    toEntity = function(UserEntity = get('UserEntity')) {
        return new UserEntity(this);
    }

    toArray = function() {
        return Array.from(this);
    }
}

module.exports = UserPresent;