const Points  = require('../models/Points')
module.exports = class PointsController {
    
    static showAll(req, res) {
        return res.render('user-points/points')
    }
    
    static async PointsSave(req, res){
        const {code} = req.body

        const pointExist = await Points.findOne({where: {code: code}})

        if(code == null){
            req.flash('message', 'código inválido')
            res.render('user-points/points')
            return
        }

        if(!pointExist){
            req.flash('message', 'código inválido')
            res.render('user-points/points')
            return
        }

        // const count = await Points.count()
        // console.log(count)
        req.flash('message', 'Ponto coletado com sucesso!')
        return res.redirect('/user/points')
    }
} 