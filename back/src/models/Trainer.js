const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const Trainer = sequelize.define('Trainer',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cpf: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        hash: {
            type: DataTypes.STRING,
            allowNull: true
        },
        salt: {
            type: DataTypes.STRING,
            allowNull: true
        }

    })

Trainer.associate = function (models) {
    Trainer.belongsToMany(models.Pokemon, {
        through: models.Catched,
        as: 'catched',
        foreignKey: 'TrainerId'
    })
}
module.exports = Trainer;