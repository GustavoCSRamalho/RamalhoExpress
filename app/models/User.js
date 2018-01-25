// app/models/User.js

var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var findOrCreate = require('mongoose-findorcreate');
var passportLocalMongoose = require('passport-local-mongoose');



module.exports = function() {
  var schema = mongoose.Schema({

    password: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      index: {
        unique: true
      }
    }
  });

  schema.plugin(findOrCreate);
// generating a hash
//   schema.methods.generateHash = function(senha) {
//     return bcrypt.hashSync(senha, bcrypt.genSaltSync(8), null);
// };
// // checking if password is valid
// schema.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
// };
//

  // schema.plugin(passportLocalMongoose);
  return mongoose.model('User',schema);
}
