import React, { useState, useEffect } from "react"
import { Grid, Input, Embed } from "semantic-ui-react"

// import {
//   Jumbotron,
//   Container,
//   Col,
//   Form,
//   //   Button,
//   //   Card,
//   //   CardColumns,
// } from "react-bootstrap"

// import Auth from '../utils/auth';
import { searchYoutubeShorts } from "../utils/API"
// import { saveRecipeIds, getSavedRecipeIds } from '../utils/localStorage';
// import { useMutation } from '@apollo/client';
// import { SAVE_RECIPE } from '../utils/mutations';

function SearchRecipes() {
  const [recipeData, setRecipeData] = useState([])

  const [inputVal, setInputVal] = useState("")

  const [query, setQuery] = useState("foodie")

  //   const [savedRecipeIds, setSavedRecipeIds] = useState(getSavedRecipeIds());

  //   const [saveRecipe, { error }] = useMutation(SAVE_RECIPE);

  const handleUpdate = (e) => {
    setInputVal(e.target.value)
  }

  const handleSearch = () => {
    console.log(inputVal)
    setQuery(inputVal)
  }

  useEffect(() => {
    fetch(`/api/shorts/${query}`)
      .then((resp) => {
        return resp.json()
      })
      .then((ytData) => {
        console.log(typeof ytData)
        console.log(ytData)
        setRecipeData(ytData)
      })
  }, [query])

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    if (!inputVal) {
      return false
    }

    try {
      const response = await searchYoutubeShorts(inputVal)

      if (!response.ok) {
        throw new Error("something went wrong!")
      }

      const { items } = await response.json()

      const recipeData = items.map((short) => ({
        title: short.snippet.title,
        description: short.snippet.description,
      }))

      setQuery(recipeData)
      setInputVal("")
    } catch (err) {
      console.error(err)
    }
  }

  //   const handleSaveRecipe = async (recipeId) => {

  //     const recipeToSave = searchedRecipes.find((recipe) => recipe.recipeId === recipeId);

  //     // get token
  //     const token = Auth.loggedIn() ? Auth.getToken() : null;

  //     if (!token) {
  //       return false;
  //     }

  //     try {

  //       await saveRecipe({
  //         variables: { recipe: { ...recipeToSave } },
  //       });

  //       setSavedRecipeIds([...savedRecipeIds, recipeToSave.recipeId]);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  return (
    <>
      <Grid textAlign="center">
        <Grid.Row stretched>
          <Grid.Column>
            <Input
              size="large"
              name="inputVal"
              value={inputVal}
              placeholder="Search for a recipe"
              action={{
                icon: "search",
                onClick: () => {
                  handleSearch()
                },
              }}
              onChange={(e) => {
                handleUpdate(e)
              }}
              onSubmit={handleFormSubmit}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid
        style={{ padding: "55px" }}
        columns={2}
        className="topVids"
        stackable
        textAlign="center"
      >
        <Grid.Row>
          <Grid.Column>
            {recipeData.map((short, i) => {
              return (
                <div key={i}>
                  Title:
                  <br />
                  {short.snippet.title}
                  <br />
                  Description:
                  <br />
                  {short.snippet.description}
                  <Embed
                    id={short.id.videoId}
                    source="youtube"
                    iframe={{
                      allowFullScreen: true,
                    }}
                    aspectRatio="4:3"
                  />
                </div>
              )
            })}
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {/* <Container>
        <h2>
          {recipeData.length
            ? `Viewing ${recipeData.length} results:`
            : 'Search for a recipe to begin'}
        </h2>
        <CardColumns>
          {recipeData.map((short, i) => {
            return (
              <Card key={recipe.recipeId} border="dark">
                {recipe.image ? (
                  <Card.Img
                    src={recipe.image}
                    alt={`The cover for ${recipe.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{recipe.title}</Card.Title>
                  <p className="small">Authors: {recipe.authors}</p>
                  <Card.Text>{recipe.description}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedRecipeIds?.some(
                        (savedRecipeId) => savedRecipeId === recipe.recipeId
                      )}
                      className="btn-block btn-info"
                      onClick={() => handleSaveRecipe(recipe.recipeId)}
                    >
                      {savedRecipeIds?.some(
                        (savedRecipeId) => savedRecipeId === recipe.recipeId
                      )
                        ? 'This recipe has already been saved!'
                        : 'Save this Recipe!'}
                    </Button>
                  )}
                  {error && <div>Something went wrong!</div>}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container> */}
    </>
  )
}

export default SearchRecipes
