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
  input RecipeInfo {
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
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveRecipe(recipeData: RecipeInfo): User
    removeRecipe(recipeId: String): User
  }
`;

module.exports = typeDefs;
