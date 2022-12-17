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

export const QUERY_RECIPE = gql `
{
  recipe {
    _id
    title
    description
    creator
    search {
      name
    }
  }
}
`;
