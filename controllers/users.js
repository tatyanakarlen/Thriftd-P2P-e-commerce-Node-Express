const User = require('../models/user');
const Item = require('../models/item');


async function index(req, res, next) {
    let user = await User.findById(req.params.id).populate('wishList')
    let items = await Item.find({userName: req.user.name})
    console.log(user)
    res.render('users/my-items.ejs', {
        user, items
    })
}



async function addToWishList(req,res) {
    let user = await User.findById(req.user.id)
    await user.wishList.push(req.params.id) 
    await user.save()
    console.log(user)
    res.redirect('/users/' + req.user.id + '/myItems')
    
}

async function userProfile(req,res) {
    let items = await Item.find({postedById: req.params.id})
    let user = await User.findById(req.params.id)
    console.log(items)
    res.render('users/userProfile.ejs', {
        items, user
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
    addToWishList,
    userProfile

}




