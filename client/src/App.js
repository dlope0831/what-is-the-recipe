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
<<<<<<< HEAD
import Navbar from './components/Navbar'
=======
import Sidebar from "./components/Navbar"
>>>>>>> c0b9b47c261db0adc88c828466b37ecc27bb2da3
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Footer from "./pages/Footer"
// import Donation from "./components/Donation"
// import { StoreProvider } from "./utils/GlobalState";
import "bootstrap/dist/css/bootstrap.min.css"
import Recipes from "./pages/Recipes"
import Saved from "./pages/Savedrecipes"

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
<<<<<<< HEAD
      <Navbar/>
=======
        <Sidebar />
>>>>>>> c0b9b47c261db0adc88c828466b37ecc27bb2da3
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/donate" element={<Donation />} /> */}
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/savedrecipes" element={<Saved />} />
          </Routes>
        </div>
        <footer>
          <Footer />
        </footer>
      </Router>
    </ApolloProvider>
  )
}

<<<<<<< HEAD

export default App
=======
export default App
>>>>>>> c0b9b47c261db0adc88c828466b37ecc27bb2da3
