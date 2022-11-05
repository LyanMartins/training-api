const sequelize = require('sequelize');
const { Sequelize } = require('sequelize');
require('dotenv').config();


class Db {

    sequelize = new Sequelize(
        process.env.DB_DATABASE, 
        process.env.DB_USER, 
        process.env.DB_PASSWORD, {
            host: process.env.DB_HOST,
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
        }
    );
    
    constructor(){        
        this.runTest(this.sequelize);
    }

    database(){
        return this.sequelize
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

let database = new Db().sequelize;

module.exports = {Db, database }; 
