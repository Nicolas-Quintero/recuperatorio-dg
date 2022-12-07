module.exports = (sequelize, dataTypes) => {
    let alias = "Users";

    let cols = {
        id: {
            type: dataTypes.BIGINT(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        rol: {
            type: dataTypes.BIGINT(11),
            allowNull: true,
            defaultValue: 0,
        },
        created_at: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: false,
        },
    };

    let config = {
        timestamps: false,
        deletedAt: false,
    };

    const Users = sequelize.define(alias, cols, config);

    return Users;
};