module.exports = class HomeController {
    
    static showAll(req, res) {
        return res.render('page-home/home')
    }
    static showCollection(req, res) {
        return res.render('points-collection/collection')
    }
} 