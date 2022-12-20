import { gql } from "@apollo/client"

// for testing ======
// import React from 'react';
// import { useMutation } from '@apollo/react-hooks';


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser(
  $firstName: String!
  $lastName: String!
  $username: String!
  $email: String!
  $password: String!
) {
  addUser(
    firstName: $firstName
    lastName: $lastName
    username: $username
    email: $email
    password: $password
  ) {
    token
    user {
      _id
    }
  }
}
`;

export const SAVE_RECIPE = gql`
  mutation saveRecipe($input: recipeInfo!) {
    saveRecipe(input: $input) {
      _id
      username
      email
      recipeCount
      savedRecipes {
        title
        description
        recipeId
        thumbnails
      }
    }
  }
`;

// attempted mock test

// function SaveRecipeButton() {
//   const [saveRecipe] = useMutation(SAVE_RECIPE, {
//     variables: {
//       title: 'new recipe',
//       author: 'me'
//     }
//   });
//   return (
//     <button onClick={saveRecipe}>Save Recipe</button>
//   )
// }



export const REMOVE_RECIPE = gql`
  mutation removeRecipe($recipeId: ID!) {
    removeRecipe(recipeId: $recipeId) {
      _id
      username
      email
      recipeCount
      savedRecipes {
        title
        description
        recipeId
        thumbnails
      }
    }
  }
`;
