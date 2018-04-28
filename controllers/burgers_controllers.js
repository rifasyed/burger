var express = require('express')
var router = express.Router()
var burger = require('../models/burger.js')

router.get('/', function(req, res) {
    res.redirect('/index')
})

router.get('/index', function(req, res) {
    burger.selectAll(function(data) {
        var obj = { burgers: data }
        res.render('index', obj)
    })
})

router.post('/burger/eat/:id', function(req, res) {
    res.redirect('/index')
})

module.exports = router