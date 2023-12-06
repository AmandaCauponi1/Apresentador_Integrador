const UserCreate = require('../models/UserCreate')
const bcrypt = require('bcryptjs')

module.exports = class UserCreateController {

    static createUser(req, res) {
        return res.render('auth/create')
    }
    static async createUserSave(req, res) {
        const { name, email, tel, password, confirmpassword } = req.body


        if (password != confirmpassword) {
            req.flash('message', 'As senhas não conferem')
            res.render('auth/create')
            return
        }
        const CheckIfUserExist = await UserCreate.findOne({ where: { email: email } })

        if (CheckIfUserExist) {
            req.flash('message', 'usuário ja cadastrado')
            res.render('auth/create')
            return
        }
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)
        const user = {
            name,
            email,
            tel,
            password: hashedPassword
        }
        
        try {
            const createUser = await UserCreate.create(user)
            req.session.userId = createUser.id
            
            
            req.flash('message', 'usuário cadastrado com sucesso')
            req.session.save(() => {
                res.redirect('/')

            })
            return
        } catch (error) {
            console.log(error)
        }


    }
    static async login(req, res) {
        return res.render('auth/login')
    }

    static async loginPost(req, res) {
        const {email, password } = req.body

        const user = await UserCreate.findOne({ where: { email: email } })

        if (!user) {
            req.flash('message', 'usuário não encontrado')
            res.render('auth/login')
            return
        }

        const passwordMatch = bcrypt.compareSync(password, user.password)

        if (!passwordMatch) {
            req.flash("message", "Senha inválida!");
            res.render("auth/login");
            return
        }
       
        
       


        try{
        req.session.userId = user.id

            req.session.save(() => {
                res.redirect('/')
            })
        
            return
        }catch(error){
            console.log(error)
        }

    }
    static async logout(req, res){
        req.session.destroy()
        response.redirect('/')
    }

}


