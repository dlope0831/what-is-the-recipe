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
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Footer from "./pages/Footer"
<<<<<<< HEAD
import Recipes from "./pages/Recipes"
import Saved from "./pages/Savedrecipes"
// import Donation from "./components/Donation"
// import { StoreProvider } from "./utils/GlobalState";
import "bootstrap/dist/css/bootstrap.min.css"

=======
import SearchRecipes from "./pages/SearchRecipes"
// import Donation from "./components/Donation"
// import { StoreProvider } from "./utils/GlobalState";
import "bootstrap/dist/css/bootstrap.min.css"
import Recipes from "./pages/Recipes"
import Saved from "./pages/Savedrecipes"
// import AppTest from './test';
>>>>>>> 3c2a49c16aaac32e9ae1c456f808c4e422958b52

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
  return (
    <ApolloProvider client={client}>
      <Router>
        <Sidebar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/donate" element={<Donation />} /> */}
            <Route path="/recipes" element={<Recipes />} />
            {/* <Route exact path='/' component={<SearchRecipes />} /> */}
            <Route path="/savedrecipes" element={<Saved />} />
          </Routes>
        </div>
        <div>
          <SearchRecipes />
        </div>
        <footer>
          <Footer />
        </footer>
      </Router>
    </ApolloProvider>
  )
}

export default App