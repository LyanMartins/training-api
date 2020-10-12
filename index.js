const express = require('express');
const Db = require('./src/config/db');

const { Routes, ListController } = require('./src/config/DI/Resolver');
const resolver = require('./src/config/DI/Resolver');

class Init {

    constructor() {

        const app = express();
        console.log("1");
        console.log(resolver);
        
        console.log("1");
        app.use('/',new Routes(resolver));

        app.listen(3000, () => {
            console.log('Servidor rodando na porta 3000...')
        });
    }

}

new Init;
