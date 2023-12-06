const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const Points = db.define('Points', {
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true
  }

}, {
  timestamps: false
})

module.exports = Points