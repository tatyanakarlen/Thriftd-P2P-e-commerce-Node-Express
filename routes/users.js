var router = require('express').Router();
var userCtrl = require('../controllers/users')


router.get('/:id/myItems', userCtrl.index) //this will render myItems profile page 

router.get('/:id', userCtrl.userProfile) //this will render public user profile page

// // addToWishList
// router.post('/:id/wishList', userCtrl.addToWishList) // this will add item to wishlist



module.exports = router;