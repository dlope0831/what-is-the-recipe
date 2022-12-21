import React, { useState, useEffect } from "react"
import {
  Container,
  Col,
  Form,
  Button,
} from "react-bootstrap"
import { Grid, Embed } from "semantic-ui-react"
import Auth from "../utils/auth"
import { searchYoutubeShorts } from "../utils/API"
import { savedRecipeIds, getSavedRecipeIds } from "../utils/localStorage"
import { useMutation } from "@apollo/client"
import { SAVE_RECIPE } from "../utils/mutations"

const SearchRecipes = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [savedRecipeIds, setSavedRecipeIds] = useState(getSavedRecipeIds())
  // const [ query, setQuery ] = useState("ramen");

  const [saveRecipe, { error }] = useMutation(SAVE_RECIPE)

  const handleUpdate = (e) => {
    setSearchInput(e.target.value)
  }

  const handleSearch = () => {
    console.log(searchInput)
    setSearchInput(searchInput)
  }

  useEffect(() => {
    fetch(`/api/shorts/${searchInput}`)
      .then((resp) => {
        return resp.json()
      })
      .then((ytData) => {
        console.log(typeof ytData)
        console.log(ytData)
        setSearchedRecipes(ytData)
      })
  }, [searchInput])

  //   useEffect(() => {
  //     return () => savedRecipeIds(savedRecipeIds)
  //   })

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    if (!searchInput) {
      return false
    }

    try {
      const response = await searchYoutubeShorts(searchInput)

      if (!response.ok) {
        throw new Error("something went wrong!")
      }

      const { items } = await response.json()

      const recipeData = items.map((recipe) => ({
        title: recipe.recipeInfo.title,
        description: recipe.recipeInfo.description,
        recipeId: recipe.recipeInfo.recipeId,
        thumbnails: recipe.recipeInfo.imageLinks?.thumbnails || "",
      }))

      setSearchedRecipes(recipeData)
      setSearchInput("")
    } catch (err) {
      console.error(err)
    }
  }

  const handleSaveRecipe = async (recipeId) => {
    const recipeToSave = searchedRecipes.find(
      (recipe) => recipe.recipeId === recipeId
    )

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null

    if (!token) {
      return false
    }

    try {
      await saveRecipe({
        variables: { recipe: { ...recipeToSave } },
      })

      setSavedRecipeIds([...savedRecipeIds, recipeToSave.recipeId])
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <Form.Row>
          <Col xs={12} md={8}>
            <Form.Control
              name="searchInput"
              value={searchInput}
              onChange={handleUpdate}
              // onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              size="lg"
              placeholder="Search for a recipe"
            />
          </Col>
          <Col xs={12} md={4}>
            <Button
              onClick={handleSearch}
              type="submit"
              variant="success"
              size="lg"
            >
              Submit Search
            </Button>
          </Col>
        </Form.Row>
      </Form>
      <Container>
        <h2>
          {searchedRecipes.length
            ? `Viewing ${searchedRecipes.length} results:`
            : "Search for a recipe to begin"}
        </h2>
        
          {searchedRecipes.map((recipe) => {
            return (
              <Grid
                text
                style={{ padding: "55px" }}
                columns={3}
                className="topVids"
                stackable
              >
                <Grid.Row>
                  <Grid.Column key={recipe.id}>
                    <Embed id={recipe.recipeId} source="youtube" />
                  </Grid.Column>
                  {/* <Grid.Column>
                    <Embed id="1AJYxBAYHoI" source="youtube" />
                  </Grid.Column>
                  <Grid.Column>
                    <Embed id="zu0MMLCLcps" source="youtube" />
                  </Grid.Column> */}
                </Grid.Row>
              </Grid>
              //   <Card key={recipe.recipeId} border="dark">
              //     {recipe.image ? (
              //       <Card.Img
              //         src={recipe.recipeInfo.thumbnails}
              //         alt={`The cover for ${recipe.recipeInfo.title}`}
              //         variant="top"
              //       />
              //     ) : null}
              //     <Card.Body>
              //       <Card.Title>{recipe.title}</Card.Title>
              //       <p className="small">Authors: {recipe.authors}</p>
              //       <Card.Text>{recipe.description}</Card.Text>
              //       {Auth.loggedIn() && (
              //         <Button
              //           disabled={savedRecipeIds?.some(
              //             (savedRecipeId) => savedRecipeId === recipe.recipeId
              //           )}
              //           className="btn-block btn-info"
              //           onClick={() => handleSaveRecipe(recipe.recipeId)}
              //         >
              //           {savedRecipeIds?.some(
              //             (savedRecipeId) => savedRecipeId === recipe.recipeId
              //           )
              //             ? "This recipe has already been saved!"
              //             : "Save this Recipe!"}
              //         </Button>
              //       )}
              //       {error && <div>Something went wrong!</div>}
              //     </Card.Body>
              //   </Card>
            )
          })}
     
      </Container>
    </>
  )
}

export default SearchRecipes
