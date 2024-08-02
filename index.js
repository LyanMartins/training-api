const express = require('express');
const { Db } = require('./src/config/db');
const cors = require('cors')
const { Routes, ListController } = require('./src/config/DI/Resolver');
const resolver = require('./src/config/DI/Resolver');
const dotenv = require('dotenv')
require('dotenv').config();

class Init {

    constructor() {
        console.log("teste");
        const app = express();
        app.use(cors())
        new Db();
        // console.log(resolver);
        app.use(express.json())
        console.log(Routes)
        app.use('/', new Routes(resolver));

        app.listen(process.env.PORT || 3000, () => {
            console.log('Servidor rodando na porta 3000...'+process.env.PORT)
        });
    }

}

new Init;
