const User = require('../models/user');
const Item = require('../models/item');

module.exports = {
  index,
  newItem,
  create, 
  show, 
  edit, 
  update, 
  deleteItem
};



// res.redirect('/flights/' + flightId)


// renders index page 
 async function index(req,res) {
  let user = await User.findById(req.user)
  let items = await Item.find()
  res.render('products/products-index.ejs', {
      user, items
  }) 
}


// shows individual item

async function show(req, res) {
  let user = await User.findById(req.user)
  let item = await Item.findById(req.params.id)
//   await item.execPopulate('postedBy')
  res.render('products/products-show.ejs', {
    user, item
  })
}

// new items functions 
// renders new item form/page
async function newItem(req,res) {
  let user = await User.findById(req.user)
  res.render('products/new-post.ejs', {
    user
  })
}


//  creates new item 

async function create(req,res) {
  console.log(req.body)
  let obj = {
      description: req.body.description, 
      category: req.body.category, 
      size: req.body.size, 
      price: req.body.price, 
      brand: req.body.brand, 
      condition: req.body.condition, 
      color: req.body.color, 
      shipping: req.body.shipping, 
      postedById: req.user.id,
      userName: req.user.name, 
      image: req.body.image

    //   req.body.userName = req.user.name

    // images: req.body.image
}
  let item = await Item.create(obj)
  res.render('products/new-item-post.ejs', {
      item, user: req.user
  })
}


// {/* <input type="file" name="image">
/* <input type="submit" name="submit" value="Upload"> *
        /* </label></br> */




// update functions 
// renders edit post page with form
async function edit(req,res) {
    let user = await User.findById(req.user)
    let item = await Item.findById(req.params.id)
    res.render('products/edit-post.ejs', {
        user, item
    })
}

// updates item

async function update(req,res) {
let item = await Item.findByIdAndUpdate(req.params.id, req.body)
res.redirect('/products/' + req.params.id)
}


// delete item 

async function deleteItem (req,res) {
    let item = await Item.deleteOne({_id: req.params.id})
    res.redirect('/users/' + req.user.id + '/myItems')
}

// remove().exec();

// Model.remove({ _id: req.body.id }


// function deleteUser(req,res) {
//     let userIdFromWildcard = req.params.id;
//     UserModel.deleteUserFromId(userIdFromWildcard);
//     // remove the item from the database
//     res.redirect('/users')
// }














// async function createTicket(req,res) {
//   const flightId = req.params.id


//   try {
//       const newTicket = await TicketModel.create({
//           seat: req.body.seat, 
//           price: req.body.price, 
//           flight: flightId
//       })
//       res.send({'data': newTicket}) //redirect
//   } catch(error){
//       res.send({'error': error.message})
//   }
// }





// function index(req, res, next) {
//   console.log('req.user', req.user)
//   // Make the query object to use with Student.find based up
//   // the user has submitted the search form or now
//   let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
//   // Default to sorting by name
//   let sortKey = req.query.sort || 'name';
//   Student.find(modelQuery)
//   .sort(sortKey).exec(function(err, students) {
//     if (err) return next(err);
//     // Passing search values, name & sortKey, for use in the EJS
//     res.render('students/index', { 
//       user: req.user,
//       students, 
//       name: req.query.name, 
//       sortKey });
//   });
// }








// async function addFact(req, res, next) {
//   // if a non-logged in person is adding a fact somehow, 
//   // redirect them elsewhere
//   if (!req.user) {
//     res.redirect('/auth/google')
//   }
//   //1. find the person who is logged in 
//   let person = await Student.findById(req.user._id)
//   person.facts.push({
//     text: req.body.text
//   })
//   await person.save()

//   res.redirect('/students')
// }

// function delFact(req, res, next) {

// }