const User = require('../models/user');
const Item = require('../models/item');

module.exports = {
  index,
  newItem,
  create, 
  show
  // addFact,
  // delFact
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
  res.render('products/products-show.ejs', {
    user, item
  })
}


// renders new item form/page
async function newItem(req,res) {
  let user = await User.findById(req.user)
  res.render('products/new-post.ejs', {
    user
  })
}


// async function show(req,res, next) {
//   let flight = await FlightsModel.findById(req.params.id)
//           res.render('flights-info.ejs', {
//               flight
//           })
//        }



//  creates new item 

async function create(req,res) {
  console.log(req.body)
let userId = await User.findById(req.user)
// let item = await Item.findById(req.params.id)

  let obj = {
      description: req.body.description, 
      category: req.body.category, 
      size: req.body.size, 
      price: req.body.price, 
      brand: req.body.brand, 
      condition: req.body.condition, 
      color: req.body.color, 
      shipping: req.body.shipping, 
      postedBy: userId
}
//  let newItem = await Item
  await Item.create(obj)
  res.send('hi hi hi')
}










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