import { gql } from "@apollo/client"

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      recipeCount
      recipeInfo {
        title
        description
        id
        thumbnails
      }
    }
  }
`;

<<<<<<< HEAD
export const QUERY_RECIPE = gql`
  query recipe($id: ID!) {
    recipe(_id: $id) {
        recipe {
          title
          description
          id
          thumbnails
        }
    }
  }
`;
=======
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

>>>>>>> c0b9b47c261db0adc88c828466b37ecc27bb2da3
