const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const bodyParser = require('body-parser');
const path = require('path')


// seteo de configuracion de ejs
app.set('view engine', 'ejs');
//views
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));
//publics
const public = path.join(__dirname, "../public");
app.use(express.static(public))

//require y middleware global, para agregar la propiedad de session al request (req.session)
const session = require("express-session");
app.use(
    session({
        secret: "express users",
        resave: false,
        saveUninitialized: false,
    })
);

//require y middleware global, para agregar la propiedad de cookies al request (req.cookies) y agregar la propiedad de cookie al response (res.cookie())
const cookie = require("cookie-parser");
app.use(cookie());

//middleware global para activar el session y el cookie
app.use(require("./middlewares/user"));

//middlewares globales
app.use(express.json())

//requiriendo rutas
const movieRuta = require('./routers/movie')
const authRuta = require('./routers/auth')

//usando rutas
app.use(movieRuta)
    //usando rutas
app.use(authRuta)


//escuchando puerto
app.listen(port, () => {
    console.log(`Servidor en el puerto ${port}`);
})