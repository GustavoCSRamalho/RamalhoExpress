// app/controller/home.js
var controller = {
    index: function(req, res) {
        res.render('index', {nome: 'Express'});
    },
    entra: function(req, res) {
      res.render('auth');
    }
};
module.exports = controller;
