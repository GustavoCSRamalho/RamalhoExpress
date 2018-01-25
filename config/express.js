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

// require('../config/passport')(passport);

module.exports = function() {
  var app = express();


  //Configuracao do ambiente
  app.set('port', 3000);

  //middleware
  app.use(express.static('./public'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

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
  // app.use(passport.initialize());
  // app.use(passport.session());

  //Inicializar o helmet

  app.use(helmet());
  app.use(helmet.xframe());
  app.use(helmet.xssFilter());
  app.use(helmet.nosniff());
  app.disable('x-powered-by');

  // home(app);
  load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    // .then('../../config/passport/register.js')
    .into(app);

    // require('../app/routes/loginRegister.js')(passport);



    //Se nenhuma rota atender, direciona para a pagina 404;

    app.get('*', function(req, res) {
      res.status(404).render('404');
    });

  return app;
};
