const express = require('express')
const router = express.Router()

const CompanyController = require('../controllers/CompanyController')

router.get('/partners', CompanyController.showPartners)
router.get('/company-create', CompanyController.showCompany)
router.post('/company-create', CompanyController.companySave)


module.exports = router