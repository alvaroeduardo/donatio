const express = require('express');

const routes = express.Router();

const verifyJWT = require('./Middleware/jwtVerify.middleware');

routes.get('/', (req, res)=>{
    res.json({hello: "world"});
});

module.exports = routes;