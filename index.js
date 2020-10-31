const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

//  setup ejs and ejs layouts
app.set('view engine', 'ejs')
app.use(ejsLayouts)

// use controllers
app.use('/auth', require('./controllers/auth.js'))

app.get('/', (req, res)=>{
    res.send('EXPRESS AUTH HOME ROUTE')
})

app.listen(8000, ()=>{
    console.log('you\'re listening to the spooky sounds of port 8000')
})