const User = require('../models/user');
const Item = require('../models/item');

module.exports = {
    create
}


async function create(req, res) {
let item = await Item.findById(req.params.id)
req.body.userName = req.user.name
await item.comments.push(req.body)
await item.save()
console.log(item)
res.redirect('/products/' + req.params.id)
}










