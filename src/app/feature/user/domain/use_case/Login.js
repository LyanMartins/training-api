class Login {

    constructor( UserRepository = get('UserRepository')) {
        this.userRepository = UserRepository;
    }

    execute = async function(params) {
        let user = await new this.userRepository()
            .getUserByUsernameAndPassword(params.email, params.password);
        
        if(!user) throw new Error('User is not Authorized', 403);

        return user;
    }

}

module.exports = Login;