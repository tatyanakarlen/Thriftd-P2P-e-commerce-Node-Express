const User = require('../models/user');
const Item = require('../models/item');

module.exports = index



function index(req, res) {
    res.send('my items page is working')
}



// renders index page 
async function myItems (req,res) {
    let user = await User.findById(req.user)
    res.render('products-index.ejs', {
        user
    }) 
  }