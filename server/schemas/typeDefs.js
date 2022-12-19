
const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Query {
  me: User
}

type Mutation {
  addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  
  addRecipe(input: recipeInfo!): Recipe
  
  saveRecipe(input: recipeInfo!): User
  removeRecipe(recipeId: ID!): User
}

  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String 
    recipeCount: Int
    savedRecipes: [Recipe]
  }

  type Recipe {
    title: String!
    description: String!
    recipeId: String!
    thumbnails: String!
  }

  input recipeInfo {
    title: String!
    description: String!
    recipeId: String!
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
    saveRecipe(input: recipeInfo!): User
    removeRecipe(recipeId: ID!): User
  }
`;

module.exports = typeDefs;

// remove addRecipe mutation (for testing only)