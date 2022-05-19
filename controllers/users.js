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


async function addToWishList(req,res) {
    let user = await User.findById(req.user.id)
    await user.wishList.push(req.params.id) 
    await user.save()
    // await user.execPopulate('wishList')
    console.log(user)
    res.send('it worked!')
    
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
    addToWishList

}




