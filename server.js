const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const fs = require('fs');


const express = require('express');
const app = express();
const port = 3000;

// IMPORT GAMES.JSON FILE
const games = require('./views/pages/game.json');

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());

// EJS TEMPLATE SERVER
app.set('view engine', 'ejs');
app.use(express.static('src'));

// INDEX PAGE
app.get('/', function(req, res) {
    // res.render('pages/index.ejs', games);
    res.render('pages/index.ejs', games);
})
// ABOUT PAGE
app.get('/about', function(req, res) {
    res.render('pages/about.ejs');
})

// POST FAVORITE GAME
app.post('/', function(req, res) {
    // console.log((JSON.stringify(req.body)));
    let testGame = req.body;
    console.log(testGame);

    saveGame(testGame, function(err) {
        if(err) {
            res.status(404).send('Game not send');
            return;
        } 
        // console.log("Your games are saved");
        // res.render('pages/index.ejs', games)
        res.send("Your games are saved");
    })
})

// CATCH REST REDIRECT TO HOME
app.get('*', function(req, res) {
    res.redirect('/');
})

// WHICH PORT
app.listen(port);
console.log(`Server is listening to ${port}`);


function saveGame(testGame, cb) {
    fs.writeFile('./views/pages/game.json', JSON.stringify(testGame), cb);
}


// let test = {
//     people: [
//         {name: 'dave'},
//         {name: 'tortilla'}
//     ]
// };
// http://localhost:3000/static/index.html
// http://localhost:3000/static/about.html
// http://localhost:3000/static/images/animu.jpg