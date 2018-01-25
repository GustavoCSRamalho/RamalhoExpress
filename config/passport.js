// config/passport.js

// var passport = require('passport');
// var GitHubStrategy = require('passport-github').Strategy;

var findOrCreate = require('mongoose-findorcreate');
var mongoose = require('mongoose');

// var login = require('./passport/login');
// var register = require('./passport/register');
//local1
//local2

module.exports = function(passport) {

  // var Usuario = mongoose.model('Usuario');

  // passport.use(new GitHubStrategy({
  //   clientID: '1bb09420cba183859475',
  //   clientSecret: '38c359bc3f4265fc9f4337a38a1cedca97347378',
  //   callbackURL: 'http://localhost:3000/auth/github/callback'
  // }, function(accessToken, refreshToken, profile, done) {
  //       Usuario.findOrCreate({ "login": profile.username},
  //     {"nome": profile.username},
  //   function(erro, usuario){
  //     if(erro){
  //       console.log(erro);
  //       return done(erro);
  //     }
  //     return done(null, usuario);
  //   }
  // );
  // }));

  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    Usuario.findById(id).exec()
      .then(function(user) {
        done(null, user);
      });
  });

  login(passport);
  register(passport);

};
