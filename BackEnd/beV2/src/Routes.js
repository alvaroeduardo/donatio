import express from "express";
import usersController from "./Controllers/users.controller.js";

const routes = express.Router();

routes.get('/users/all', usersController.listAllUsers);
routes.get('/users', usersController.findUser);
routes.post('/users', usersController.createNewUser);
routes.put('/users/update', usersController.updateUser);
routes.delete('/users/delete', usersController.deleteUser);

export { routes as default };