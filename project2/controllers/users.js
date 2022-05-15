const User = require('../models/user');
const Item = require('../models/item');


async function index(req, res) {
    let user = await User.findById(req.params.id)
    let items = await Item.find({userName: req.user.name})
    console.log(items)
    res.render('users/my-items.ejs', {
        user, items
    })
}

// let items = await Item.find({postedBy: req.params.id})

// async function userPublicProfile(req,res) {

// }




// async function index(req,res) {
//     let user = await User.findById(req.user)
//     let items = await Item.find()
//     res.render('products/products-index.ejs', {
//         user, items
//     }) 
//   }

module.exports = {
    index, 

}




// renders index page 
// async function myItems (req,res) {
//     let user = await User.findById(req.user)
//     res.render('products-index.ejs', {
//         user
//     }) 
//   }