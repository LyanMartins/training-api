

class UserController {


    constructor(
        createUser = get('CreateUser'),
        userPresent = get('UserPresent')
    ) 
    {
        this.createUser = createUser;
        this.UserPresent = userPresent;
    }

    create = async function (req, res) {
        let params = new this.UserPresent(req.body);
        res.json(await new this.createUser().execute(params.toEntity()));
    }

}

module.exports = UserController;