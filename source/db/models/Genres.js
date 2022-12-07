module.exports = (sequelize, dataTypes) => {
    let alias = "Genres";

    let cols = {
        id: {
            type: dataTypes.BIGINT(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        created_at: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        ranking: {
            type: dataTypes.BIGINT(20),
            allowNull: false,
        },
        active: {
            type: dataTypes.BIGINT(20),
            allowNull: false,
        },
    };

    let config = {
        timestamps: false,
        deletedAt: false,
    };

    const Genres = sequelize.define(alias, cols, config);

    Genres.associate = function(models) {
        Genres.hasMany(models.Movies, {
            as: "movies",
            foreignKey: "genre_id",
            otherKey: "id",
        });
    };

    return Genres;
};