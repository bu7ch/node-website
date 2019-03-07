const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const monsterRouter  = require('./routes/monstreRoute');
//Config APPLICATION
app.use(express.static(__dirname +'/public'));
app.set('view engine', 'pug');
// MES ROUTES
app.get('/bonjour', function(req, res){
  res.send('coucou')
})
app.use('/monstres', monsterRouter);

app.listen(port, function(){
  console.log('[Application is running!]')
})