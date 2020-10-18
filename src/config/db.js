const { Sequelize } = require('sequelize');

class Db {
    
    constructor(){
        const sequelize = new Sequelize('mercadolist', 'root', '', {
            host: 'localhost',
            dialect: 'mysql'
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
