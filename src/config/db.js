const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('dbvpjcu0drcnpk', 'rigtdkfpljcueh', 'db03ecf548bf6b4429cf6b9078b62161058e86f2fd812314d6bbb48e8bdc955d', {
    host: 'ec2-44-206-55-249.compute-1.amazonaws.com',
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
