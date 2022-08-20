const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const Pokémon = sequelize.define('Pokémon',
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
        }
    },
    { timestamps: false })
Pokémon.associate = function (models) {
    Pokémon.belongsToMany(models.Trainer, {
        through: models.Catched,
        as: 'catched',
        foreignKey: 'Catched_Pokémon'
    })
}
module.exports = Pokémon;
