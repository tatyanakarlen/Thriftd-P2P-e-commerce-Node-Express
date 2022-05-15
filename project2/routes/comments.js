var router = require('express').Router();
var commentsCtrl = require('../controllers/comments')

router.post('/products/:id/comments', commentsCtrl.create);

module.exports = router;