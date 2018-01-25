//config/express.js
var express = require('express');
var home = require('../app/routes/home') ;
var load = require('express-load');
var bodyParser = require('body-parser');
//add depois
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

var helmet = require('helmet');

module.exports = function() {
  var app = express();


  //Configuracao do ambiente
  app.set('port', 3000);

  //middleware
  app.use(express.static('./public'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(require('method-override')());

//engine utilizada
  app.set('view engine','ejs');
//pasta das views
  app.set('views','./app/views');

  app.use(cookieParser());
  app.use(session(
  { secret: 'homem avestruz',
  resave: true,
  saveUninitialized: true
  }
  ));
  app.use(passport.initialize());
  app.use(passport.session());

  //Inicializar o helmet

  app.use(helmet());
  app.use(helmet.xframe());
  app.use(helmet.xssFilter());
  app.use(helmet.nosniff());
  app.disable('x-powered-by');

  // home(app);
  load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes/auth.js')
    .then('routes')
    .into(app);

    //Se nenhuma rota atender, direciona para a pagina 404;

    app.get('*', function(req, res) {
      res.status(404).render('404');
    });

  return app;
};
