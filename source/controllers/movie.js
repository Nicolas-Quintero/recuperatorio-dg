const { request, response } = require('express');
const controllerMovie = {}
const db = require('../db/models')
const expressValidator = require("express-validator");
controllerMovie.gestionPelicula = (req = request, res = response) => {
    return res.render('gestion-peliculas')
}

controllerMovie.getAllMovies = async(req = request, res = response) => {
    try {
        const peliculas = await db.Movies.findAll({
            include: ["Genres"]
        })
        console.log('user', req.session.user);
        res.render('home', {
            peliculas
        })
    } catch (error) {
        res.json({ status: false, message: 'error' })
        console.log(error);
    }
}
controllerMovie.getByIdMovies = async(req = request, res = response) => {
    try {
        let id = req.params.id;
        const pelicula = await db.Movies.findByPk(id, {
            include: ["Genres"]
        })
        res.render('peliculas-detalle', {
            pelicula
        })
    } catch (error) {
        res.json({ status: false, message: 'error' })
        console.log(error);
    }
}

controllerMovie.createMovie = async(req = request, res = response) => {
    const dataBody = req.body;
    const result = expressValidator.validationResult(req);
    if (!result.isEmpty()) {
        let errores = result.mapped();
        console.log(errores);
        return res.render("gestion-peliculas", {
            errores: errores,
            data: req.body,
        });
    }
    const data = {
        created_at: new Date(),
        updated_at: new Date(),
        title: req.body.title,
        rating: Number(req.body.rating),
        awards: Number(req.body.awards),
        release_date: req.body.release_date,
        length: 0,
        genre_id: Number(req.body.genres)
    }
    await db.Movies.create(data);
    res.redirect('/')
    console.log('pruevba', data);

}

controllerMovie.deleteMovie = async(req = request, res = response) => {

    try {
        let id = req.params.id;
        const pelicula = await db.Movies.findByPk(id, {
            include: ["Genres"]
        });
        await pelicula.destroy();
        return res.redirect('/');
    } catch (error) {
        res.json({ status: false, message: 'error' })
        console.log(error);
    }
}



//exportando el modulo de rutas
module.exports = controllerMovie