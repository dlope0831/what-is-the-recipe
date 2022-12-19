import { gql } from "@apollo/client"

export const GET_ME = gql`
  {
    me {
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

// export const QUERY_RECIPE = gql`
//   query recipe($id: ID!) {
//     recipe(_id: $id) {
//       recipe {
//         title
//         description
//         recipeId
//         thumbnails
//       }
//     }
//   }
// `;

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