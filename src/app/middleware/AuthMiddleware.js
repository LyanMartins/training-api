const jwt = require("jsonwebtoken");

class AuthMiddeware {

    constructor(req, res, nex)
    {
        
    }

    auth = function(req, res, next) 
    {
        let headers = req.headers
        
        if(typeof headers.authorization !== 'undefined'){
            let bearer = headers.authorization.split(' ');
            if(bearer[0] !== 'Bearer') return res.sendStatus(403);
            req.token = bearer[1];
            const verify = AuthMiddeware.verifyToken(req.token);
            req.user = verify;
            next();
        }else {
            res.sendStatus(403)
        }
    }

    static verifyToken = function(token) 
    {
        return jwt.verify(token,'secretkey', (error, data) => {
            return (error)? error: data;
        })
    }

}

module.exports = AuthMiddeware;