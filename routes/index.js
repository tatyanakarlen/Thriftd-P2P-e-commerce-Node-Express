var router = require('express').Router();
const passport = require('passport')
var categoriesCtrl = require('../controllers/categories')
// I had to make a seperate CTRL file because index ctrl was not working 


// The root route renders our only view
router.get('/', function(req, res) {
  res.redirect('/products');
});


//handle the URL that our login button will point to 
//passport will take the user to the consent screen 
router.get('/auth/google', passport.authenticate( 
'google', 
{ 
  scope: ['profile', 'email'], 
  prompt: "select_account",
}

))

router.get('/oauth2callback', passport.authenticate(
  'google', 
  {
    successRedirect: '/products', 
    failureRedirect: '/products', 
  }
))

// log out points here
router.get('/logout', function(req,res) {
  req.logout()
  res.redirect('/products')
})

// renders about page
router.get('/showAll', categoriesCtrl.about)

// // renders clothing category
router.get('/clothing', categoriesCtrl.clothing)

// // renders accesory category
router.get('/accessories', categoriesCtrl.accessories)




module.exports = router;