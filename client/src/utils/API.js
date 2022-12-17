// route to get logged in user's info (needs the token)
export const getMe = (token) => {
  return fetch('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const addRecipe = (recipeData, token) => {
  return fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(recipeData),
  });
};


export const deleteRecipe = (recipeId, token) => {
  return fetch(`/api/users/recipes/${recipeId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};


export const searchYoutubeShorts = (query) => {
  return google.youtube('v3').videos.list({
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

// require('dotenv').config()

// const httpLink = createHttpLink({
//   uri: "youtube.googleapis.com/youtube/v3/search?key=" + process.env.YOUTUBE_TOKEN +"/graphql",
// });

// https://www.youtube.com/watch?v=n5Op1CIdg4Y