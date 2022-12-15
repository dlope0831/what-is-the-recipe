import { gql } from "@apollo/client"

export const GET_ME = gql`
  {
    me {
      _id
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