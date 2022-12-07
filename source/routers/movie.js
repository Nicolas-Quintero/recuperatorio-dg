const express = require('express');
const rutas = express.Router();
const controllerMovie = require('../controllers/movie')
const validaciones = require('../validations/validation-create-movie')
rutas.get('/', controllerMovie.getAllMovies);
rutas.get('/movie/:id', controllerMovie.getByIdMovies);
rutas.get('/gestion-pelicula', controllerMovie.gestionPelicula);
rutas.post('/crear-pelicula', validaciones, controllerMovie.createMovie);
rutas.get('/movie-detele/:id', controllerMovie.deleteMovie);

//exportando el modulo de rutas
module.exports = rutas;