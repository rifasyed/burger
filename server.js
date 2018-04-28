var express = require('express')
var bodyparser = require('body-parser')
var path = require('path')

// new express app
var app = express()

// middleware
var expresshbs = require('express-handlebars')
app.engine('hbs', expresshbs({defaultLayout: 'main'}))
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

// var router = require('./controllers/burgers_controllers.js')
// app.use('/', router)

var PORT = process.env.PORT || 3000

// listeningport
app.listen(PORT, function (e) {
  if (e) throw e
  console.log("App listening on port: " + PORT)
}) 