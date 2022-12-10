const { Schema, model } = require('mongoose');
const Recipe = model( 'Recipe', RecipeSchema)

const RecipeSchema = new Recipe({
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

module.exports = Recipe;