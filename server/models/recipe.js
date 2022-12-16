import { Schema, model } from 'mongoose';

const recipeTrendSchema = new Schema({
  
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


export const RecipeTrend = model('RecipeTrend', recipeTrendSchema);

