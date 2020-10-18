const { Sequelize } = require('sequelize');

class Db {
    
    constructor(){
        const sequelize = new Sequelize('d70m620gkqf8pr', 'dfclxccuwltopv', '84dbe0e93c2fdcc7baed545fc91d10cd2a80bbe2c77d6ac8ae305797f9cea0e3', {
            host: 'ec2-107-20-104-234.compute-1.amazonaws.com',
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
module.exports = Db; 
