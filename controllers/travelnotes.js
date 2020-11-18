const express = require('express');
const router = express.Router()
const db = require('../models')

//route for deleting comment
router.delete('/:id/delete', async (req, res, next) => {
    let travelNote = await db.travelNotes.findOne({where: {id: req.params.id}}).catch(e => {
       console.log(e.message)
    })
    if (!travelNote){
      console.log("err");
    }
    travelNote.destroy();
    res.redirect('/favorites');
  });
  
//route for editing a comment
router.get('/:id/edit', async (req, res, next) => {
    let travelNote = await db.travelNotes.findOne({where: {id: req.params.id}}).catch(e => {
        console.log(e.message)
     })
    if (!travelNote){
        console.log("err");
    }
    res.render('editnote', {travelNoteKey: travelNote});
})


router.put('/:id/edit', async (req, res, next) => {
    let travelNote = await db.travelNotes.findByPk(req.params.id).catch(e => {
        console.log(e.message)
        res.redirect(`/travelnotes/${req.params.id}/edit`) // this is redirecting in case of a catch error
    })
    if (!travelNote){
        console.log("err")
        res.redirect(`/travelnotes/${req.params.id}/edit`) // this is redirecting in case of a catch error
    }
    travelNote.content = req.body.content 
    travelNote.save()
    res.redirect('/favorites')
})


module.exports = router

// use travel not id on delete button