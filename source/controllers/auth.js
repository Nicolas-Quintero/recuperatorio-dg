const { request, response } = require('express');
const controllerAuth = {};
const bcrypt = require("bcrypt");
const db = require('../db/models')
const expressValidator = require("express-validator");
controllerAuth.login = (req = request, res = response) => {
    return res.render('login')
}
controllerAuth.register = (req = request, res = response) => {
    return res.render('register')
}
controllerAuth.logout = (req = request, res = response) => {
    delete req.session.user;
    res.cookie("user", null, { maxAge: -1 });
    return res.redirect("/");
}
controllerAuth.loggend = async(req = request, res = response) => {
    try {
        const erroresReq = expressValidator.validationResult(req);
        if (!erroresReq.isEmpty()) {
            // El mapped hace mas legible los errores para Java
            let errores = erroresReq.mapped();
            console.log(errores);
            return res.render("login", {
                errores: errores,
                data: req.body,
            });
        }

        res.cookie("user", req.body.email, { maxAge: 1000 * 60 * 60 });
        const userLogged = await db.Users.findOne({
            where: {
                email: req.body.email,
            },
        });
        req.session.user = userLogged;
        return res.redirect("/");
    } catch (error) {

    }
}
controllerAuth.registerAdd = async(req = request, res = response) => {
    try {
        const erroresReq = expressValidator.validationResult(req);
        if (!erroresReq.isEmpty()) {
            // El mapped hace mas legible los errores para Java
            let errores = erroresReq.mapped();
            console.log(errores);
            return res.render("register", {
                errores: errores,
                data: req.body,
            });
        }
        const data = {
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            remember_token: 'asd54f1s3a68s4d',
            created_at: new Date(),
            updated_at: new Date(),
            rol: Number(req.body.rol)
        }
        console.log(data);
        await db.Users.create(data)
        res.redirect('/login')
    } catch (error) {

    }
}




//exportando el modulo de rutas
module.exports = controllerAuth