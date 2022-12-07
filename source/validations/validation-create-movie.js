const expressValidator = require("express-validator");

const validaciones = [
    expressValidator
    .body('title')
    .notEmpty()
    .withMessage("Este campo debe ser completado"),
    expressValidator
    .body('rating')
    .notEmpty()
    .withMessage("Este campo debe ser completado"),
    expressValidator
    .body('awards')
    .notEmpty()
    .withMessage("Este campo debe ser completado"),
    expressValidator
    .body('release_date')
    .notEmpty()
    .withMessage("Este campo debe ser completado")
]

module.exports = validaciones