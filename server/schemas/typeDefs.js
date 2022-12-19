
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
<<<<<<< HEAD
=======



  type Query {
    me: User
  }


  type Mutation {
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveRecipe(input: recipeInfo!): User
    removeRecipe(recipeId: ID!): User
  }
>>>>>>> c0b9b47c261db0adc88c828466b37ecc27bb2da3
`;

module.exports = typeDefs;

// remove addRecipe mutation (for testing only)