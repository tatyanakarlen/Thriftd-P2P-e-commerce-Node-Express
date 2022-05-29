var router = require('express').Router();
var userCtrl = require('../controllers/users')


router.get('/:id/myItems', userCtrl.index) //this will render myItems profile page 

router.get('/:id', userCtrl.userProfile) //this will render public user profile page



module.exports = router;