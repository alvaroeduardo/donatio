const mysql = require('mysql2');
const connection = require('../db.config');

module.exports = {
    index(req, res){
        connection.query(
            "SELECT * FROM doacoes WHERE id = (?)",

            [req.query.id],

            (error, results) => {
                if(error) return res.status(500).json({error: error});

                return res.status(200).json(results);
            }
        );
    },

    allDonates(req, res){
        connection.query(
            "SELECT * FROM doacoes",

            (error, results) => {
                if(error) return res.status(500).json({error: error});

                return res.status(200).json(results);
            }
        );
    },

    insertDonate(req, res){
        connection.query(
            "INSERT INTO doacoes (titulo, end_retirada, produtos_id) VALUES (?, ?, ?)",

            [req.body.titulo, req.body.end, req.body.prod],

            (error, results) => {
                if(error) return res.status(500).json({error: error});

                return res.status(201).json(results);
            }
        );
    },

    updateDonate(req, res){
        connection.query(
            "UPDATE doacoes SET titulo = (?), end_retirada = (?), produtos_id = (?)",

            [req.body.titulo, req.body.end, req.body.prod],

            (error, results) => {
                if(error) return res.status(500).json({error: error});

                if(results.affectedRows == 0){
                    return res.status(404).json({Status: "Doação não encontrada. Nenhuma alteração foi realizada."});
                }

                return res.status(200).json({Status: "Alteração realizada com sucesso.", Results: results});
            }
        );
    },

    deleteDonate(req, res){
        connection.query(
            "DELETE FROM doacoes WHERE id = (?)",

            [req.query.id],

            (error, results) => {
                if(error) return res.status(500).json({error: error});

                if(results.affectedRows == 0){
                    return res.status(404).json({Status: "Doação não encontrada. Nenhuma doação foi deletada."});
                }

                return res.status(200).json({Status: "Doação deletada com sucesso.", Results: results});
            }
        );
    }
}