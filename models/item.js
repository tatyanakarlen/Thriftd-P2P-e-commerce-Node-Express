var mongoose = require('mongoose');
const { Schema } = require('mongoose');




const commentSchema = new Schema({
    content: String, 
    userName: String,
  }, 
  {
    timestamps: true
  });



const itemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    
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
      max: 50,
      required: true
  },
  userName: String,
  image: String,
  postedById: {
      type: Schema.Types.ObjectId, 
      ref: 'User'
  }, 
  comments: [commentSchema]
}, {
  timestamps: true
});

//image: []

module.exports = mongoose.model('Item', itemSchema);
