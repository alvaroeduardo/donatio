require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Routes = require('./src/routes');
const connection = require('./src/db.config');

const app = express();
app.use(Routes);

app.use(cors());
app.use(express.json());

const port = process.env.PORT || '3333';

app.listen(port, ()=>{
    console.log(`Servidor iniciado com sucesso. Rodando na porta ${port}.` );
    
    connection.connect(function(err){
        if (err) return err;

        console.log('Banco de dados conectado com sucesso.');
    })
})