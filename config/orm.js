var config = require('./connection.js')

config.connect(function(e) {
    if (e) throw e
})

var orm = {
    selectAll: function(cb) {
        config.query('SELECT * FROM burgers', function(e, r) {
            if (e) throw e
        })
    },
    insertOne: function(burger_name, cb) {
        config.query('INSERT INTO burgers SET ?', {
            burger_name: burger_name,
            devoured: false
        }, function(e, r) {
            if (e) throw e
            cb(r)
        })
    },
    updateOne: function(id, cb) {
        config.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: id}], function(e, r) {
            if (e) throw 
            cb(r)
        })
    }







}

module.exports = orm