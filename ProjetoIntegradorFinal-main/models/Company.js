const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const company = db.define('company', {
    cnpj: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
      },
      razaosocial: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
      },
      municipal: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
      },
      cnae: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
      },
      
      rua: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
      },
      numero: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
      },
      bairro: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
      },
      cep: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
      },
      complemento: {
        type: DataTypes.STRING,
        allowNull: false,
        require: false
      },
      cidade: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
      },
      nomeresp: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
      },
      depto: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
      },
      tel: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
      }
      
})

module.exports = company