const express = require('express');
const rutas = express.Router();
const controllerAuth = require('../controllers/auth')
const validaciones = require('../validations/validation-login')
const validaciones2 = require('../validations/validation.register')
rutas.get('/login', controllerAuth.login);
rutas.get('/register', controllerAuth.register);
rutas.get('/logout', controllerAuth.logout);
rutas.post('/loggend', validaciones, controllerAuth.loggend);
rutas.post('/register-add', validaciones2, controllerAuth.registerAdd);

//exportando el modulo de rutas
module.exports = rutas;