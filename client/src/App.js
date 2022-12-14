import React from "react"
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
import "semantic-ui-css/semantic.min.css"

import Login from "./pages/Login"
// import Signup from "./pages/Signup";
// import { StoreProvider } from "./utils/GlobalState";

// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem("id_token");
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Router>
//         <div>
//             <Switch>
//               <Route path="/" element={<Login/>} />
//               <Route path="/signup" element={<Signup/>} />
//             </Switch>
//         </div>
//       </Router>
//     </ApolloProvider>
//   );
function App() {
  return (
  <Login />
  )
}

export default App
