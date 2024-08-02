// const sequelize = require('sequelize');
const { Sequelize } = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize(
    process.env.POSTGRES_DB, 
    process.env.POSTGRES_USER, 
    process.env.POSTGRES_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        ssl: true,
        protocol: "postgres",
        logging: true,
        dialectOptions: {
            // ssl: {
            //     require: true,
            //     rejectUnauthorized: false 
            // }
        }
    }
);

class Db {

        
    constructor(){        
        this.runTest(sequelize);
    }

    database(){
        // return this.sequelize
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

// let database = new Db().sequelize;

module.exports = {Db, sequelize }; 
