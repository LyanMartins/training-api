class CreateUser {

    constructor(
        UserRepository = get('UserRepository')
    ) {
        this.userRepository = UserRepository;
    }

    execute = async function (params) {
        let user = new this.userRepository().create(params)
        return user;
    }

}

module.exports = CreateUser;