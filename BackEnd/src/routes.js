const express = require('express');

const routes = express.Router();

const verifyJWT = require('./Middleware/jwtVerify.middleware');

const userController = require('./Controllers/user.controller');
const donateController = require('./Controllers/donate.controller');
const posController = require('./Controllers/pos.controller');
const prodController = require('./Controllers/products.controller');
const typeController = require('./Controllers/type.controller');

// Rotas Usuários
routes.get(   '/user',               verifyJWT, userController.index);
routes.get(   '/user/all',           verifyJWT, userController.allUsers);
routes.post(  '/user/register',                 userController.register);
routes.post(  '/user/login',                    userController.login);
routes.put(   '/user/update',        verifyJWT, userController.updateUser);

// Rotas Doações
routes.get(   '/donate',              verifyJWT, donateController.index);
routes.get(   '/donate/all',          verifyJWT, donateController.allDonates);
routes.post(  '/donate/insert',       verifyJWT, donateController.insertDonate);


// Rotas de Gestão
routes.get(   '/admin/pos',               verifyJWT, posController.index);
routes.get(   '/admin/pos/all',           verifyJWT, posController.allPos);
routes.get(   '/admin/prod',               verifyJWT, prodController.index);
routes.get(   '/admin/prod/all',           verifyJWT, prodController.allProducts);
routes.get(   '/admin/type',               verifyJWT, typeController.index);
routes.get(   '/admin/type/all',           verifyJWT, typeController.allTypes);

routes.post(  'admin/pos/insert',       verifyJWT, posController.insertPos);
routes.post(  'admin/prod/insert',       verifyJWT, prodController.insertProducts);
routes.post(  'admin/type/insert',       verifyJWT, typeController.insertTipo);

routes.put(   '/admin/prod/update', verifyJWT, prodController.updateProduct);
routes.put(   '/admin/donate/update', verifyJWT, donateController.updateDonate);

routes.delete('/admin/pos/delete', verifyJWT, posController.deletePos);
routes.delete('/admin/prod/delete', verifyJWT, prodController.deleteProducts);
routes.delete('/admin/type/delete', verifyJWT, typeController.deleteTipo);
routes.delete('/admin/user/delete',  verifyJWT, userController.deleteUser);
routes.delete('/admin/donate/delete', verifyJWT, donateController.deleteDonate);


module.exports = routes;