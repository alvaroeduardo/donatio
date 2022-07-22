const mysql = require('mysql2');
const connection = require('../db.config');

module.exports = {
    index(req, res){
        connection.query(
            'SELECT * FROM  produtos WHERE id = (?)',

            [req.query.id],

            (error, results) => {
                if(error) return res.status(500).json({error: error});

                return res.status(200).json(results);
            }
        );
    },

    allProducts(req, res){
        'SELECT * FROM posicao',

        (error, results) => {
            if(error) return res.status(500).json({error: error});
            
            return res.status(200).json(results);
        }
    },

    insertProducts(req, res){
        connection.query(
            'INSERT INTO produtos(titulo, tipo_id) VALUES (?, ?)',

            [req.body.titulo, req.body.tipo],

            (error, results) => {
                if(error) return res.status(500).json({error: error});

                return res.status(201).json(results);
            }
        );
    },

    updateProduct(req, res){
        connection.query(
            "UPDATE produtos SET titulo = (?), tipo_id = (?)",

            [req.body.titulo, req.body.tipo],

            (error, results) => {
                if(error) return res.status(500).json({error: error});

                if(results.affectedRows == 0){
                    return res.status(404).json({Status: "Produto não encontrado. Nenhuma alteração foi realizada."});
                }

                return res.status(200).json({Status: "Alteração realizada com sucesso.", Results: results});
            }
        );
    },

    deleteProducts(req, res){
        connection.query(
            'DELETE FROM produtos WHERE id = (?)',

            [req.query.id],

            (error, results) => {
                if(error) return res.status(500).json({error: error});

                if(results.affectedRows == 0){
                    return res.status(404).json({Status: "Produto não encontrado. Nenhum produto foi deletado."});
                }

                return res.status(200).json({Status: "Produto deletado com sucesso.", Results: results});
            }
        );
    }
}