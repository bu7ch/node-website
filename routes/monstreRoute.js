const express = require('express');
const monstreRouter = express.Router();
const monstres = require('../monstres');

// la route GET /all pour voir tous les monster
monstreRouter.get('/all', function(req, res){
  res.render('monstres',{monstres: monstres}) // 1 : pug 2: ancre 3: js
})
// la route GET/:id pour voir un monstre


module.exports = monstreRouter;