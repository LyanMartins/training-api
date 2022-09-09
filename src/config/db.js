const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('db371en0lkmpuq', 'ukhkagdgljhpxb', 'c5da387617004c6e46c6d9e6e7dffa9e178477e374526ea7d936c7c9cbcd9d0d', {
    host: 'ec2-34-193-44-192.compute-1.amazonaws.com',
    dialect: 'postgres',
    ssl: true,
    protocol: "postgres",

    logging: true,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false 
        }
    }
});

class Db {
    
    constructor(){
        this.runTest(sequelize);
    }
    
    async runTest(sequelize){
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }

}
module.exports = {Db, sequelize}; 
