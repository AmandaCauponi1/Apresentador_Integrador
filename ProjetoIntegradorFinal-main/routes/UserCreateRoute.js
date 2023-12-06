const express = require('express')
const routerCreate =  express.Router()

const UserCreateController = require('../controllers/UserCreateController')

routerCreate.get('/create', UserCreateController.createUser)
routerCreate.post('/create', UserCreateController.createUserSave)
routerCreate.get('/login', UserCreateController.login)
routerCreate.post('/login', UserCreateController.loginPost)
routerCreate.get('/logout', UserCreateController.logout)

module.exports = routerCreate