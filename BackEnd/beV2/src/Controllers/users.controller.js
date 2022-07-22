import { v4 as uuidv4 } from 'uuid';
import usersModel from "../Models/users.model.js";

async function listAllUsers(req, res){
    await usersModel.findAll()
        .then( (result) => res.json(result) )
}

async function findUser(req, res){
    await usersModel.findByPk( req.query.id )
        .then( (result) => res.json(result) )
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
        .then( (result) => res.json(result) )
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
        .then( (result) => res.json(result) )
}

async function deleteUser(req, res){
    const user = await usersModel.findByPk(req.query.id);

    user.destroy()
        .then( (result) => res.json(result) )
} 

export default { listAllUsers, findUser, createNewUser, updateUser, deleteUser }