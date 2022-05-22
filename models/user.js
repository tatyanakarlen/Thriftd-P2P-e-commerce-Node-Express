var mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  googleId: String,
  wishList: {
    type: [mongoose.Schema.Types.ObjectId], 
    ref: 'Item'
}, 
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);

// const expenseSchema = new mongoose.Schema({
  //       supplier: {
  //           type: mongoose.Schema.Types.ObjectId, 
  //           ref: 'Supplier'
  //       },
  //       createdBy: {
  //           type: mongoose.Schema.Types.ObjectId, 
  //           ref: 'User'
  //       },
  //       expense_date: Date,
  //       category: String,
  //       description: String,
  //       amount: Number,
  //       rate: Number,
  //       total:Number,
  //   }, 
  //   {
  //       timestamps: true
  //   });