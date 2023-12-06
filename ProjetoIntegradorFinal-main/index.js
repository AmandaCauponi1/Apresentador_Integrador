const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')


const app = express()
const door = 3333

const conn = require('./db/conn')

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())


// Import Models

const UserCreate = require('./models/UserCreate')
const Company = require('./models/Company')
const Points = require('./models/Points')

// Import Routes

const routerCreate = require('./routes/UserCreateRoute')
const CompanyRoute = require('./routes/CompanyRoute')
const routerHome = require('./routes/HomeRoute')
const routerPoints = require('./routes/PointsRoutes')



// Configurar engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// Configurar JSON


// Middleware para sessions
app.use(session({
  name: 'session',
  secret: 'nosso_secret',//Quanto maior a crypto melhor
  resave: false,
  saveUninitialized: true,
  store: new FileStore({
    logFn: function (){},
    path: require('path').join(require('os').tmpdir(), 'sessions')
  }),
  cookie:{
    secure: true,
    maxAge: 360000,
    expires: new Date(Date.now() + 360000),
    httpOnly: true
  }

}))

// Importar as flashs
app.use(flash())
// Importar arquivos estaticos

app.use(express.static('public'))
// Armazenar as sessões nas rotas
app.use((req, res, next)=> {
  if(req.session.userId){
    res.locals.session = req.session
  }
  next()
})
// Rotas
app.use('/', routerHome)
app.use('/', CompanyRoute)
app.use('/user', routerCreate)
app.use('/user', routerPoints)



// Conexão e criação das tabelas do banco
conn
.sync()
.then(() => {
  app.listen(3333)
})
.catch((err) => console.log(err))
