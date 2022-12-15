import { gql } from "@apollo/client"

export const GET_ME = gql`
  {
    me {
      _id
      firstName
      lastName
      username
      email
      recipeCount
      recipeInfo {
        recipeId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
