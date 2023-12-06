const Company = require('../models/Company')

module.exports = class CompanyController{
    static showPartners(req, res){
        return res.render('company-form/partners')
    }
    static showCompany(req, res){
        return res.render('company-form/company')
    }
    static async companySave(req, res){
        const company = {
            cnpj: req.body.cnpj,
            razaosocial: req.body.razaosocial,
            nome: req.body.nome,
            municipal: req.body.municipal,
            cnae: req.body.cnae,
            rua: req.body.rua,
            numero: req.body.numero,
            bairro: req.body.bairro,
            cep: req.body.cep,
            complemento: req.body.complemento,
            cidade: req.body.cidade,
            estado: req.body.estado,
            nomeresp: req.body.nomeresp,
            depto: req.body.depto,
            email: req.body.email,
            tel: req.body.tel
        }

        await Company.create(company)
        return res.redirect('/')
    }
}