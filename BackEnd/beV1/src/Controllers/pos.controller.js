const mysql = require('mysql2');
const connection = require('../db.config');

module.exports = {
    index(req, res){
        connection.query(
            'SELECT * FROM posicao WHERE id = (?)',

            [req.query.id],

            (error, results) => {
                if(error) return res.status(500).json({error: error});

                return res.status(200).json(results);
            }
        );
    },

    allPos(req, res){
        connection.query(
            'SELECT * FROM posicao',

            (error, results) => {
                if(error) return res.status(500).json({error: error});

                return res.status(200).json(results);
            }
        );
    },

    insertPos(req, res){
        connection.query(
            'INSERT INTO posicao(titulo) VALUES (?)',

            [req.body.titulo],

            (error, results) => {
                if(error) return res.status(500).json({error: error});

                return res.status(201).json(results);
            }
        );
    },

    deletePos(req, res){
        connection.query(
            'DELETE FROM posicao WHERE id = (?)',

            [req.query.id],

            (error, results) => {
                if(error) return res.status(500).json({error: error});

                if(results.affectedRows == 0){
                    return res.status(404).json({Status: "Posição não encontrada. Nenhuma posição foi deletada."});
                }

                return res.status(200).json({Status: "Posição deletada com sucesso.", Results: results});
            }
        );
    }
}