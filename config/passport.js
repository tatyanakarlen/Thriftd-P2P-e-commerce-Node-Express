const passport = require('passport')
const User = require('../models/user')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

passport.use(new GoogleStrategy ({
    clientID: process.env.GOOGLE_CLIENT_ID, 
    clientSecret: process.env.GOOGLE_SECRET, 
    callbackURL: process.env.GOOGLE_CALLBACK,
    callbackURL:"http://localhost:3000/oauth2callback"

}, 


  function(accessToken, refreshToken, profile, cb) {
      // a user has logged in OAuth...
      //is this a new user? Or someone that's logged in before?
      console.log('data from consent screen', profile)
      User.findOne({ 'googleId': profile.id }, function(err, user) {
      if (err) return cb(err);
      if (user) {
        return cb(null, user);
      } else {
        // we have a new user via OAuth!
        var newUser = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        newUser.save(function(err) {
          if (err) return cb(err);
          return cb(null, newUser);
        });
      }
    });
  }
));

passport.serializeUser(function(user,done){ //what to put in the cookie
    done(null, user.id)
})

// passport will create req.user variable if a logged-in user is making requests 
// if a non-logged in user, req.user will be undefined 
//req.user might look like this {
// id: 'adsdf', name: 'ryann', googleId: '123', facts: []
// and will be avaiable to all controllers

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
