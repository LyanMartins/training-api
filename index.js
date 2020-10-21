const express = require('express');
const { Db } = require('./src/config/db');

const { Routes, ListController } = require('./src/config/DI/Resolver');
const resolver = require('./src/config/DI/Resolver');

class Init {

    constructor() {

        const app = express();
        new Db();
        console.log(resolver);
        app.use(express.json())
        app.use('/', new Routes(resolver));

        app.listen(process.env.PORT || 3000, () => {
            console.log('Servidor rodando na porta 3000...'+process.env.PORT)
        });
    }

}

new Init;
