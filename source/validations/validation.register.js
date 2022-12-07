const bcrypt = require("bcrypt");
const db = require("../db/models");
const expressValidator = require("express-validator");

const validaciones = [
    expressValidator
    .body("name")
    .notEmpty()
    .withMessage("El nombre debe ser completado"),
    expressValidator
    .body("email")
    .notEmpty()
    .withMessage("El email debe ser completado")
    .bail()
    .isEmail()
    .withMessage("Email no valido")
    .bail()
    .custom(async function(value, { req }) {
        try {
            const result = await db.Users.findOne({
                where: {
                    email: value,
                },
            });
            if (result) {
                return Promise.reject("Email en uso, seleccione otro");
            }
        } catch (error) {
            return console.log(error);
        }
    }),

    expressValidator
    .body("password")
    .notEmpty()
    .withMessage("La contraseña debe ser completada")
    .bail()
    .isLength({ min: 8, max: 10 })
    .withMessage("La contraseña debe tener entre 8 caracteres y 10 caracteres")
    .bail()
    .isStrongPassword({
        minLength: 8,
        minLowercase: 0,
        minUppercase: 1,
        minNumbers: 0,
        minSymbols: 0,
    })
    .withMessage("La contraseña debe tener al menos 1 caracter en mayúscula")
    .bail()
    .isStrongPassword({
        minLength: 8,
        minLowercase: 0,
        minUppercase: 1,
        minNumbers: 0,
        minSymbols: 0,
    })
    .withMessage("La contraseña debe tener al menos 1 caracter en mayúscula")
    .bail()
    .isStrongPassword({
        minLength: 8,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 1,
        minSymbols: 0,
    })
    .withMessage("La contraseña debe tener al menos 1 caracter numérico")
    .bail()
    .isStrongPassword({
        minLength: 8,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 1,
    })
    .withMessage("La contraseña debe tener al menos 1 caracter especial"),
    expressValidator
    .body("rol")
    .notEmpty()
    .withMessage("El rol debe ser completado")
];

module.exports = validaciones;