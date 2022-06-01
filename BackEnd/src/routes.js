const express = require('express');

const routes = express.Router();

const verifyJWT = require('./Middleware/jwtVerify.middleware');

const userController = require('./Controllers/user.controller');
const donateController = require('./Controllers/donate.controller');

// Rotas Usuários
routes.get(   '/user',         verifyJWT, userController.index);
routes.get(   '/user/all',     verifyJWT, userController.allUsers);
routes.post(  '/user/register',           userController.register);
routes.post(  '/user/login',             userController.login);
routes.put(   '/user/update',  verifyJWT, userController.updateUser);
routes.delete('/user/delete',  verifyJWT, userController.deleteUser);

// Rotas Doações
routes.get('   /donate',        verifyJWT, donateController.index);
routes.get('   /donate/all',    verifyJWT, donateController.allDonates);
routes.post('  /donate/insert', verifyJWT, donateController.insertDonate);
routes.put('   /donate/update', verifyJWT, donateController.updateDonate);
routes.delete('/donate/delete', verifyJWT, donateController.deleteDonate);


module.exports = routes;