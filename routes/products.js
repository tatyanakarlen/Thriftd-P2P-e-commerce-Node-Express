var router = require('express').Router();
var productsCtrl = require('../controllers/products')
var uploadCtrl = require('../controllers/upload')
var userCtrl = require('../controllers/users')

const multer = require("multer");
const upload = multer({ dest: 'uploads/'});

// GET home page 
router.get('/', productsCtrl.index) //renders index page


// for the new item posts by user
router.get('/new', productsCtrl.newItem)
router.post('/', upload.single('image'), productsCtrl.create) //handles POST new items


//individual ITEM show page
router.get('/:id', productsCtrl.show)

// renders edit/update form for item
router.get('/:id/edit', productsCtrl.edit) // this will be linked from product page and render an ejs 'edit'
router.put('/:id', productsCtrl.update) // this will update the item 

// delete
router.delete('/:id', productsCtrl.deleteItem); 

// images upload
router.post('/upload', upload.single('image'), uploadCtrl.upload)

// addToWishList
router.post('/:id', userCtrl.addToWishList) // this will add item to wishlist





  







module.exports = router;

