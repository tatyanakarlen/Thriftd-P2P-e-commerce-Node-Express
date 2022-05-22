const User = require('../models/user');
const Item = require('../models/item');

module.exports = {
    about, 
    clothing, 
    accessories

}

// renders about page
async function about(req,res) {
    let items = await Item.find()
    res.render('categories/showAll.ejs', {
    items, user: req.user
})
}

// renders all clothing collection
// async function clothing(req,res) {
//     res.render('categories/clothing.ejs', {
//         user: req.user
//     })
// }

// renders all clothing collection
async function clothing(req,res) {
    let items = await Item.find({category: 'Clothing'})
    console.log(items)
    res.render('categories/clothing.ejs', {
    items, user: req.user
})
}


// renders all accesries collection
async function accessories(req,res) {
    let items = await Item.find({category: 'Accessories'})
    console.log(items)
    res.render('categories/accessories.ejs', {
    items, user: req.user
})
}


// async function index(req, res, next) {
//     let user = await User.findById(req.params.id).populate('wishList')
//     let items = await Item.find({userName: req.user.name})
//     console.log(user)
//     res.render('users/my-items.ejs', {
//         user, items
//     })
// }


