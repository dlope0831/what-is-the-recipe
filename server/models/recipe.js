const { Schema } = require('mongoose');

const recipeSchema = new Schema({
  
  authors: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  // saved recipe id from tiktok
  recipeId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  });


module.exports = recipeSchema;