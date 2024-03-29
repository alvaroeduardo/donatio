import express from "express";

import verifyJwt from "./Middleware/jwt.middleware.js";

import usersController from "./Controllers/users.controller.js";
import donationsController from "./Controllers/donations.controller.js";
import requestsController from "./Controllers/requests.controller.js";

const routes = express.Router();

routes.get('/users/all', verifyJwt, usersController.listAllUsers);
routes.get('/users', verifyJwt, usersController.findUser);
routes.post('/users', usersController.createNewUser);
routes.post('/users/login', usersController.login);
routes.put('/users/update', verifyJwt, usersController.updateUser);
routes.delete('/users/delete', verifyJwt, usersController.deleteUser);

routes.get('/donations/all', verifyJwt, donationsController.listAllDonations);
routes.get('/donations', verifyJwt, donationsController.findDonate);
routes.post('/donations', verifyJwt, donationsController.createNewDonate);
routes.put('/donations/update', verifyJwt, donationsController.updateDonate);
routes.delete('/donations/delete', verifyJwt, donationsController.deleteDonate);

routes.get('/requests/all', verifyJwt, requestsController.listAllRequests);
routes.get('/requests/list', verifyJwt, requestsController.specificDonations);
routes.get('/requests', verifyJwt, requestsController.findRequest);
routes.post('/requests', verifyJwt, requestsController.createNewRequest);
routes.put('/requests/update', verifyJwt, requestsController.updateRequest);
routes.delete('/requests/delete', verifyJwt, requestsController.deleteRequest);

export { routes as default };