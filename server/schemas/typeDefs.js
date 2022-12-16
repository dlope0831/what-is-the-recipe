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
    recipeId: String!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  input recipeInfo {
    authors: [String]
    description: String
    title: String
    recipeId: String
    image: String
    link: String
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
    saveRecipe(input: recipeInfo!): User
    removeRecipe(recipeId: ID!): User
  }
`;

module.exports = typeDefs;

// put token back on auth