const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');
const { typeDefs, resolvers } = require("./schemas");
const searchYoutubeShorts = require ("./youtube.js")

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
})


app.use('/images', express.static(path.join(__dirname, '../client/images')));

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.use(routes);
app.get('', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})
app.get('/api/shorts/:q', (req, res) => {
  searchYoutubeShorts(req.params.q).then((response)=>{
    res.status(200).json(response)
  }) 
    .catch((error)=>{
    console.log(error)
    res.status(500).json(error)
  })
})


const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });


 db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
  });
};

startApolloServer(typeDefs, resolvers);