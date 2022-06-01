const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const connection = require('../db.config');

module.exports = {
    index(req, res){
        connection.query(
            "SELECT * FROM usuarios WHERE id = (?)",
            
            [req.query.id],

            (error, results) => {
                if(error) return res.status(500).json({error: error});

                return res.status(200).json(results);
            }
        );
    },

    allUsers(req, res){
        connection.query(
            "SELECT * FROM usuarios",

            (error, results) => {
                if(error) return res.status(500).json({error: error});

                
                return res.status(200).json(results);
            }
        );
    },
    
    register(req, res){
        connection.query(
            "INSERT INTO usuarios (nome, email, cpf, end, pass, posicao_id) VALUES (?, ?, ?, ?, md5(?), ?)",

            [req.body.nome, req.body.email, req.body.cpf, req.body.end, req.body.pass, req.body.posicao_id],

            (error, results) => {
                if(error) return res.status(500).json({error: error});

                return res.status(201).json(results);
            }
        );
    },

    login(req, res){
        connection.query(
            "SELECT * FROM usuarios WHERE cpf = (?) AND pass = md5(?)",

            [req.body.cpf, req.body.pass],

            (error, results) => {
                if(error) return res.status(500).json({error: error});

                if(results[0] == null){
                    return res.status(404).json({Response: "O Login não pode ser efetuado com sucesso. Usuário não encontrado."});
                }

                const token = jwt.sign({
                        userId: results[0].id,
                        permission: results[0].posicao_id
                    }, 
                    process.env.SECRET_KEY, 
                    {expiresIn: 3600}
                );

                return res.status(200).json({auth: true, token: token});
            }
        );
    },

    updateUser(req, res){
        connection.query(
            "UPDATE usuarios SET nome = (?), email = (?), cpf = (?), end = (?), pass = md5((?)) WHERE id = (?)",

            [req.body.nome, req.body.email, req.body.cpf, req.body.end, req.body.pass, req.query.id],

            (error, results) => {
                if(error) return res.status(500).json({error: error});

                if(results.affectedRows == 0){
                    return res.status(404).json({Status: "Usuário não encontrado. Nenhuma alteração foi realizada."});
                }

                return res.status(200).json({Status: "Alteração de dados realizada com sucesso.", Results: results});
            }
        );
    },

    deleteUser(req, res){
        connection.query(
            "DELETE FROM usuarios WHERE id = (?)",

            [req.query.id],

            (error, results) => {
                if(error) return res.status(500).json({error: error});

                if(results.affectedRows == 0){
                    return res.status(404).json({Status: "Usuário não encontrado. Nenhum usuário foi deletado."});
                }

                return res.status(200).json({Status: "Usuário deletado com sucesso.", Results: results});
            }
        );
    }
}