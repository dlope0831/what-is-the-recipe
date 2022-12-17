const { Schema } = require('mongoose');

const recipeSchema = new Schema({
  
  title: {
      type: String,
      required: true,
    },
  description: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  thumbnails: {
    type: String,
    required: true,
  },

});


module.exports = recipeSchema;