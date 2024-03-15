const express = require('express');
const controller = require('../Controllers/userAdmin');
const routes = express.Router();
routes.use(controller.authenticateJWT); // Move this line below the routes definition


routes.post('/add', controller.add);
routes.post('/login', controller.login);
routes.get('/:email', controller.getUserByemail);



module.exports = routes;