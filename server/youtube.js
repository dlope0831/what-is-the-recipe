require('dotenv').config()
const { google } = require('googleapis');


module.exports =  searchYoutubeShorts = async (query) => {
  return await google.youtube('v3').search.list({
    "key": process.env.YOUTUBE_TOKEN,
    "part": [
      "snippet"
    ],
    "q": `recipes + ${query}`,
    "chart": "mostPopular",
    "maxResults": 10,
    "order": "viewCount",
    "relevanceLanguage": "en",
    "topicId": "/m/02wbm",
    "type": [
      "video"
    ],
    "videoCategoryId": "22",
    "videoDuration": "short"
  }).then((response) => {
  const { data } = response;
  // data.items.forEach((item) => {
      // console.log(`Title: ${item.snippet.title}\nDescription: ${item.snippet.description}\n Creator: ${item.snippet.channelId} `)

  // })
  return data.items;
}).catch((err) => console.log(err))
};
