const express = require('express');

const routes = express.Router();

const verifyJWT = require('./Middleware/jwtVerify.middleware');

const userController = require('./Controllers/user.controller');

// Rotas Usuários
routes.get('/user', verifyJWT, userController.index);
routes.get('/user/all', verifyJWT, userController.allUsers);
routes.post('/user/register', userController.register);
routes.post('/user/login', userController.login);
routes.put('/user/update', verifyJWT, userController.updateUser);
routes.delete('/user/delete', verifyJWT, userController.deleteUser);

module.exports = routes;