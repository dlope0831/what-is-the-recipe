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
`

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

// export const QUERY_RECIPE = gql `
// {
//   recipe {
//     _id
//     title
//     description
//     creator
//     search {
//       name
//     }
//   }
// }
// `;

