const { Schema } = require('mongoose');

const recipeSchema = new Schema({
  
    recipeName: {
        type: String
    },
    createdBy: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    size: {
      type: String,
      default: 'Large'
    },
    ingredients: []
  });


module.exports = recipeSchema;