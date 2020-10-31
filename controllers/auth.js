const express = require('express')
const router = express.Router()

router.get('/signup', (req, res)=>{
    res.render('auth/signup')
})

router.post('/signup', (req, res)=>{
    console.log('sign up form user input:', req.body)
    // redirect to login page
    res.redirect('/auth/login')
})

router.get('/login', (req, res)=>{
    res.render('auth/login')
})

router.post('/login', (req, res)=>{
    console.log('Trying to log in with this input:', req.body)
    //redirect to home route
    res.redirect('/')
})

module.exports = router