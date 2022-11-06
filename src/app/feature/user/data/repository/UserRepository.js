class UserRepository {

    constructor(UserModel = get('UserModel')) {
        this.userModel = UserModel;
    }

    create = function(user) {
        user.create = Date.now();
        return this.userModel.create(user);
    }

    getUserByUsernameAndPassword = function(email, password) {
        let user = this.userModel.findOne({
            where: {
                email: email,
                password: password
            },
            raw: true,
        });
        
        return user;
    }
}

module.exports = UserRepository;