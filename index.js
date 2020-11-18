require('dotenv').config()
const axios = require('axios')
const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const session = require('express-session')
const passport = require('./config/ppConfig.js')
const flash = require('connect-flash')
const isLoggedIn = require('./middleware/isLoggedIn')
var methodOverride = require('method-override');

app.use(express.static("public"))

//  setup ejs and ejs layouts
app.set('view engine', 'ejs')
app.use(ejsLayouts)

// body parser middleware (this makes req.body work)
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'));

// session middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}))

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

// flash middleware goes after the session middleware
app.use(flash())

// CUSTOM MIDDLEWARE
app.use((req, res, next)=>{
    // before every route, attach the messages and current user to res.locals
    // this will give us access to these values in all our ejs pages
    res.locals.alerts = req.flash()
    res.locals.currentUser = req.user
    next() //move on to the next piece of middleware
})


// use controllers
app.use('/auth', require('./controllers/auth.js'))
app.use('/favorites', require('./controllers/favorites.js'))
app.use('/travelnotes', require('./controllers/travelnotes.js'))

app.get('/', (req, res)=>{
    res.render('home.ejs')
})

app.get('/currencies', (req, res)=> {
    let searchTerm = req.query.search
    let rate;
    axios.get(`https://v6.exchangerate-api.com/v6/2e3aa64969cf7da2800a6c63/latest/${searchTerm}`)
    .then(response=>{
        rate = response.data.conversion_rates
        console.log(response.data)
        res.render('currencies', {results: response.data, rates: rate})
    })
    .catch(err=>{
        console.log(err)
    })
})

app.get('/favorites', (req, res)=>{
    res.render('favorites.ejs')
})




// app.get('/exchange', function(req, res) {
//     res.send('Hello')
//     const pokemonUrl = 'https://v6.exchangerate-api.com/v6/2e3aa64969cf7da2800a6c63/latest/USD';
//     console.log(pokemonUrl)
//     // Use request to call the API
//     axios.get(pokemonUrl).then( function(apiResponse) {
//       const result = apiResponse.data;
//       res.render('exchange', {result: result});
//     })
//   });

app.get('/profile', isLoggedIn, (req,res)=>{
    res.render('profile.ejs')
})

app.listen(process.env.PORT, ()=>{
    console.log('you\'re listening to the spooky sounds of port 8000')
})