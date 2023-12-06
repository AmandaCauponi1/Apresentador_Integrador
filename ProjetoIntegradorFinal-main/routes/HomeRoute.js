
const express = require('express')
const routerHome =  express.Router()

const HomeController = require('../controllers/HomeController')

routerHome.get('/', HomeController.showAll)
routerHome.get('/to-search', HomeController.showCollection)


module.exports = routerHome