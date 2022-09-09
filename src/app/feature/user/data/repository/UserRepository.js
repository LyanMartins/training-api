class UserRepository {

    constructor() {
        console.log('repository');
    }

    create = function(user) {
        return user;
    }
}

module.exports = UserRepository;