class LoginPresent {

    email;
    password;

    constructor(input) {
        this.email = input.email;
        this.password = input.password;
    }

    toEntity = function(UserEntity = get('UserEntity')) {
        return new UserEntity(this);
    }

    toArray = function() {
        return Array.from(this);
    }

}

module.exports = LoginPresent;