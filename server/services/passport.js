

var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const { Users } = require('../models/user');

const keys = require('../config/keys');

passport.serializeUser(function(user, done) {
    console.log('----'+user.id);
    done(null, user.id);
 });

 passport.deserializeUser(function(id, done) {
    Users.findById(id, function(err, user) {
       done(err, user);
     });
  });
  
passport.use(new GoogleStrategy({
    clientID: keys.clientID,
    clientSecret: keys.clientSecret,
    callbackURL: keys.callbackURL,
    passReqToCallback : true
  },
  async function(req,accessToken, refreshToken, profile, done) {
     var existingUser = await Users.findOne({googleId:profile.id});
     if(!existingUser){
       // return done(null, false,  req.flash('signupMessage', 'Please contact your admin.'));
         return done(null);
      }
      return done(null, existingUser);
   }
));
