import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';

import usersModel from "../Models/users.model.js";

async function listAllUsers(req, res){
    await usersModel.findAll()
        .then( (result) => {
            if(result == []){
                res.status(202).json({Result: "Nenhum usuário foi criado."})
            }

            res.status(202).json(result);
        } )
}

async function findUser(req, res){
    await usersModel.findByPk( req.query.id )
        .then( (result) => {
            if(result == null){
                res.status(404).json({Result: "Nenhum usuário com esse Id foi encontrado."})
            }

            res.status(202).json(result);
        } )
}

function createNewUser(req, res){
    usersModel.create({
        id: uuidv4(),
        name: req.body.name,
        cpf: req.body.cpf,
        address: req.body.address,
        email: req.body.email,
        password: req.body.password,
        isGiver: req.body.isGiver,
        profilePic: req.body.profilePic
    })
        .then( 
            (result) => res.json({Results: "Usuário criado com sucesso.", result}) 
        )
}

async function updateUser(req, res){
    const user = await usersModel.findByPk(req.query.id);

    user.name = req.body.name;
    user.cpf = req.body.cpf;
    user.address = req.body.address;
    user.email = req.body.email;
    user.password = req.body.password;
    user.isGiver = req.body.isGiver;
    user.profilePic = req.body.profilePic;

    await user.save()
        .then( (result) => res.status(200).json({Results: "Dados atualizados com sucesso.", result}) )
}

async function deleteUser(req, res){
    const user = await usersModel.findByPk(req.query.id);

    user.destroy()
        .then( (result) => res.status(200).json({Results: "Deletado com sucesso."}) )
}

async function login(req, res){
    await usersModel.findOne({
        where: {cpf: req.body.cpf, password: req.body.password}
    })
        .then(
            (result) => {
                if(result == null){
                    res.status(404).json({Results: "Dados não são congruentes. Login não efetuado."})
                }

                const token = jwt.sign({
                        userId: result.id,
                        isAdmin: result.isAdmin,
                        isGiver: result.isGiver
                    },
                        process.env.SECRET_KEY,
                        {expiresIn: 3600}
                );

                res.status(200).json({auth: true, token: token})
            }
        )
}

export default { listAllUsers, findUser, createNewUser, updateUser, deleteUser, login }