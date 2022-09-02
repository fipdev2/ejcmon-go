const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const Pokemon = sequelize.define('Pokemon',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        height: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        pokédex_index: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        pokémon_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sex: {
            type: DataTypes.STRING,
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING
        }
    },
    { timestamps: false })
Pokemon.associate = function (models) {
    Pokemon.belongsToMany(models.Trainer, {
        through: models.Catched,
        as: 'catched',
        foreignKey: 'PokemonId'
    })
}
module.exports = Pokemon;
