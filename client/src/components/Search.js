// import React, { useState } from "react"

// import { Grid, Input } from "semantic-ui-react"

// function Search() {
//   const [searchState, setSearchState] = useState("")

//   const handleSearch = (e) => {
//     const searchInput = e.target.value

//     setSearchState(searchInput)
//   }

//   const handleClick = () => {
//     console.log(searchState)
//   }

//   return (
//     <>




// <Jumbotron fluid className="text-light bg-dark">
//   <Container>
//     <h1>Search for Recipes!</h1>
//     <Form onSubmit={handleFormSubmit}>
//       <Col xs={12} md={8}>
//         <Form.Control
//           name="inputVal"
//           value={inputVal}
//           onChange={handleUpdate}
//           type="text"
//           size="lg"
//           placeholder="Search for a recipe"
//         />
//       </Col>
//       <Col xs={12} md={4}>
//         <div>
//           {/* <p>{inputVal} </p>
//       <input type="text" value={inputVal} onChange={handleUpdate} /> */}
//           <button onClick={handleSearch}>Search</button>

//           {recipeData.map((short, i) => {
//             return (
//               <div key={i}>
//                 Title:
//                 <br></br>
//                 {short.snippet.title}
//                 <br></br>
//                 Description:
//                 <br></br>
//                 {short.snippet.description}
//                 <Embed
//                   id={short.id.videoId}
//                   source="youtube"
//                   url={`www.youtube.com/shorts/${query}`}
//                   iframe={{
//                     allowFullScreen: true,
//                   }}
//                   aspectRatio="4:3"
//                 />
//               </div>
//             )
//           })}
//         </div>
//       </Col>
//     </Form>
//   </Container>
// </Jumbotron>
//   )
// }

// export default Search
