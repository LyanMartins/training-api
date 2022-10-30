class UserRepository {

    constructor(UserModel = get('UserModel')) {
        this.userModel = UserModel;
    }

    create = function(user) {
        user.create = Date.now();
        return this.userModel.create(user);
    }
}

module.exports = UserRepository;