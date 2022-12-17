const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String 
    recipeCount: Int
    savedRecipes: [Recipe]
  }

  type Recipe {
    title: String!
    description: String!
    id: String!
    thumbnails: String!
  }


  input recipeInfo {
    title: String!
    description: String!
    id: String!
    thumbnails: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addRecipe(input: recipeInfo!): User
    removeRecipe(recipeId: ID!): User
  }
`;

module.exports = typeDefs;

// put token back on auth