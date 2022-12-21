import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import "semantic-ui-css/semantic.min.css"
import Sidebar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./pages/Footer"
import Recipes from "./pages/Recipes"
import Saved from "./pages/Savedrecipes"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Auth from "./utils/auth"
// import Donation from "./components/Donation"
// import { StoreProvider } from "./utils/GlobalState";
import "bootstrap/dist/css/bootstrap.min.css"


const httpLink = createHttpLink({
  uri: "/graphql",
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token")
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function App() {
  if (Auth.loggedIn()) {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Sidebar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/donate" element={<Donation />} /> */}
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/savedrecipes" element={<Saved />} />
            </Routes>
          </div>
        <Footer />
        </Router>
      </ApolloProvider>
            );
      } else {
        return(
          <Router>
                    <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          </Routes>
          </Router>
          );
        }
      }


export default App
