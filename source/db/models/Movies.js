module.exports = (sequelize, dataTypes) => {
    let alias = "Movies";

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
        title: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: dataTypes.BIGINT(20),
            allowNull: false,
        },
        awards: {
            type: dataTypes.BIGINT(20),
            allowNull: false,
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        length: {
            type: dataTypes.BIGINT(20),
            allowNull: false,
        },
        genre_id: {
            type: dataTypes.BIGINT(11),
            allowNull: true,
            defaultValue: 1,
        },

    };

    let config = {
        timestamps: false,
        deletedAt: false,
    };

    const Movies = sequelize.define(alias, cols, config);

    Movies.associate = function(models) {
        Movies.belongsTo(models.Genres, {
            as: "Genres",
            foreignKey: "genre_id",
            otherKey: "id",
        });
    };

    return Movies;
};