var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  googleId: String,
  wishList: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Item'
}], 
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);