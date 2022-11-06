class Login {

    constructor( 
        UserRepository = get('UserRepository'),
        jwt = require("jsonwebtoken")) 
    {
        this.userRepository = UserRepository;
        this.jwt = jwt;
    }

    execute = async function(params) 
    {
        let user = await new this.userRepository()
            .getUserByUsernameAndPassword(params.email, params.password);
        
        if(!user) throw new Error('User is not Authorized', 403);

        user.token = this.createTokenBearer(user);
        
        return user;
    }

    createTokenBearer = function(user) 
    {
        return `Bearer ${this.jwt.sign({user}, 'shhhhh')}`;
        
    }

}

module.exports = Login;