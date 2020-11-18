const express = require('express')
const router = express.Router()
const db = require('../models')
const isLoggedIn = require('../middleware/isLoggedIn')

// adding favorite to favorites page
router.get('/', function(req, res) {
    // TODO: Get all records from the DB and render to view

    db.favorites.findAll({
      where: {
        userId: req.user.id,
        
      },
      include: [db.travelNotes]
    })
    .then(favorites =>{
        console.log(favorites[0].travelNote)
        res.render('favorites', {favorites: favorites}) // always use the key in the key value pair in the ejs file to access the information we are storying in the value
    })
    .catch((error) => {
      console.log(error)
    }) 
  })

  


  router.post('/', isLoggedIn, (req, res) =>{
    // TODO: Get form data and add a new record to DB
    console.log("Yep it work\s")
    console.log(req.body)
    
    db.favorites.findOrCreate({
        where: {
          currencyCode: req.body.currencyCode, 
          userId: req.user.id
        }
    })
    .then(([favorite, created])=>{
      // db.user.findOne({
      //     where: {id: req.session.passport.user}
      // }).then(user=>{
      //     user.addFavorite(favorites)
      //     console.log('User ' + user.rates + ' favorited ' + favorites.rates);
      // })
      res.redirect('/favorites')
  })
    .catch(err => {
        console.log('Something went wrong', err)
    })
  });

  router.get('/:id', (req, res) =>{
    db.favorites.findByPk(req.params.id, {
      include: [{// Notice `include` takes an ARRAY
        model: db.travelNotes
      }]
    })
    .then(foundFavorite =>{
      console.log('HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAH')
      console.log(foundFavorites)
      res.render('favorite/show', {foundFavorite: foundFavorite})
    })
    .catch(console.error)
  })

  router.post('/:favoriteId/travel-note', (req,res) =>{
    db.travelNotes.create({
      favoriteId: req.params.favoriteId,
      content: req.body.content
    });
    res.redirect("/favorites");
  })

  
  

module.exports = router