const mysql = require('mysql2');
const connection = require('../db.config');

module.exports = {
    index(req, res){
        connection.query(
            'SELECT * FROM tipo WHERE id = (?)',

            [req.query.id],

            (error, results) => {
                if(error) return res.status(500).json({error: error});

                return res.status(200).json(results);
            }
        );
    },

    allTypes(req, res){
        connection.query(
            'SELECT * FROM tipo',

            (error, results) => {
                if(error) return res.status(500).json({error: error});

                return res.status(200).json(results);
            }
        );
    },

    insertTipo(req, res){
        connection.query(
            'INSERT INTO tipo(titulo) VALUES (?)',

            [req.body.titulo],

            (error, results) => {
                if(error) return res.status(500).json({error: error});

                return res.status(201).json(results);
            }
        );
    },

    deleteTipo(req, res){
        connection.query(
            'DELETE FROM tipo WHERE id = (?)',

            [req.query.id],

            (error, results) => {
                if(error) return res.status(500).json({error: error});

                if(results.affectedRows == 0){
                    return res.status(404).json({Status: "Tipo de produto não encontrado. Nenhum tipo foi deletado."});
                }

                return res.status(200).json({Status: "Tipo deletado com sucesso.", Results: results});
            }
        );
    }
}