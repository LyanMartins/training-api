class UserController {


    constructor(
        createUser = get('CreateUser'),
        Login = get('Login'),
        userPresent = get('UserPresent'),
        LoginPresent = get('LoginPresent')
    ) 
    {
        this.createUser = createUser;
        this.Login = Login;
        this.UserPresent = userPresent;
        this.LoginPresent = LoginPresent;
    }

    create = async function (req, res) {
        let params = new this.UserPresent(req.body);
        res.json(await new this.createUser().execute(params.toEntity()));
    }

    login = async function (req, res) {
        try{
            let params = new this.LoginPresent(req.body);
            let user = await new this.Login().execute(params.toEntity());
            res.json(user);
        }catch(e) {
            res.status(403).json(e.message);
        }
       
    }

}

module.exports = UserController;