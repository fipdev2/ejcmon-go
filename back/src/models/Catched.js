const { BelongsToMany } = require('sequelize');
const DataTypes = require('sequelize');
const sequelize = require('../config/sequelize');

const Catched = sequelize.define('Catched',
    {
        amount: {
            type: DataTypes.NUMBER
        }
    },
    {
        timestamps: true
    }
)


module.exports = Catched;
