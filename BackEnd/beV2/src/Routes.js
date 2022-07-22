import express from "express";

import usersController from "./Controllers/users.controller.js";
import donationsController from "./Controllers/donations.controller.js";

const routes = express.Router();

routes.get('/users/all', usersController.listAllUsers);
routes.get('/users', usersController.findUser);
routes.post('/users', usersController.createNewUser);
routes.put('/users/update', usersController.updateUser);
routes.delete('/users/delete', usersController.deleteUser);

routes.get('/donations/all', donationsController.listAllDonations);
routes.get('/donations', donationsController.findDonate);
routes.post('/donations', donationsController.createNewDonate);
routes.put('/donations/update', donationsController.updateDonate);
routes.delete('/donations/delete', donationsController.deleteDonate);

export { routes as default };