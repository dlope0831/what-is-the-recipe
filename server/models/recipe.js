const { Schema } = require('mongoose');

const recipeSchema = new Schema({
  
  part: [
    {
      type: String,
    },
  ],
  q: {
    type: String,
    required: true,
  },
  // saved recipe id from tiktok
  maxResults: {
    type: String,
    required: true,
  },
  order: {
    type: String,
  },
  relevanceLanguage: {
    type: String,
  },
  topicId: {
    type: String,
    required: true,
  },
  });


module.exports = recipeSchema;