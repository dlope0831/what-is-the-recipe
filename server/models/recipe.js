import { Schema, model } from 'mongoose';

const recipeTrendSchema = new Schema({
  
  'searchTerms':{
    type: String,
    required: true,
    unique: false
  },
  'rank': {
      type: Number
  },
  'title': {
      type: String
  },
  'snippet': {
      type: String
  },
  'displayLink': {
      type: String
  },
  'link': {
      type: String
  },
  'queryTime': {
      type: String
  }
});


export const RecipeTrend = model('RecipeTrend', recipeTrendSchema);

