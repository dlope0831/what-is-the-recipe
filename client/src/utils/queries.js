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

// export const QUERY_BOOK = gql`
//   query book($id: ID!) {
//     book(_id: $id) {
//         book {
//             _id
//             authors
//             description
//             title
//             image
//             link
//         }
//     }
//   }
// `;