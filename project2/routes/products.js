var router = require('express').Router();
var productsCtrl = require('../controllers/products')

// GET home page 
router.get('/', productsCtrl.index) //renders index page


// for the new item posts by user
router.get('/new', productsCtrl.newItem)
router.post('/', productsCtrl.create) //handles POST new items


//individual ITEM show page
router.get('/:id', productsCtrl.show)



module.exports = router;

