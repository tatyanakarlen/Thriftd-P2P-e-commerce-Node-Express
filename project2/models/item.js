const { Schema } = require('mongoose');
var mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  description: {
      type: String,
      required: true
  },
  category: {
      type: String,
      required: true
  },

  size: {
      type: String,
      required: true
  },

  price: {
      type: Number, 
      required: true,
      min: 2, 
      max: 500
  },
  brand: {
      type: String, 
      required: true
  },

  condition: {
      type: String, 
      required: true
  }, 

  color: {
      type: String, 
      required: true
  },

  shipping: {
      type: Number, 
      min: 0, 
      max: 50
  },
  postedBy: {
      type: Schema.Types.ObjectId, 
      ref: 'User'
  }

}, {
  timestamps: true
});

module.exports = mongoose.model('Item', itemSchema);