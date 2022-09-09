class CreateUser {

    constructor(
        UserRepository = get('UserRepository')
    ) {
        this.userRepository = UserRepository;
        // console.log(UserRepository);
    }

    execute = async function (params) {
        let user = new this.userRepository().create(params)
        return params;
    }

}

module.exports = CreateUser;