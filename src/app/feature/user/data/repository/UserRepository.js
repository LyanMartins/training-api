class UserRepository {

    constructor() {
        console.log('repository');
    }

    create = function(user) {
        user.create = Date.now();
        return user;
    }
}

module.exports = UserRepository;