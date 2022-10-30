class UserEntity {
    name;
    email;
    password;
    created;
    modifield;
    deleted;

    constructor(input) 
    {
        this.name = input.name;
        this.email = input.email;
        this.password = input.password;
        this.created = input.created;
        this.modifield = input.modifield;
        this.deleted = input.deleted;
    }
    
}

module.exports = UserEntity;