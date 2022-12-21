import React, { useState, useEffect } from "react"
import { Grid, Input, Embed, Button } from "semantic-ui-react"

import Auth from "../utils/auth"
import { searchYoutubeShorts } from "../utils/API"
import { saveRecipeIds, getSavedRecipeIds } from "../utils/localStorage"
import { useMutation } from "@apollo/client"
import { SAVE_RECIPE } from "../utils/mutations"

import { Jumbotron, Container, Col, Form } from "react-bootstrap"

function SearchRecipes() {
  const [recipeData, setRecipeData] = useState([])

  const [inputVal, setInputVal] = useState("")

  const [query, setQuery] = useState("foodie")

  const [savedRecipeIds, setSavedRecipeIds] = useState(getSavedRecipeIds())

  const [saveRecipe] = useMutation(SAVE_RECIPE)

  useEffect(() => {
    return () => saveRecipeIds(savedRecipeIds)
  })

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
        recipeId: short.id.videoId,
        title: short.snippet.title,
        description: short.snippet.description,
      }))

      setQuery(recipeData)
      setInputVal("")
      console.log(recipeData)
    } catch (err) {
      console.error(err)
    }
  }

  const handleSaveRecipe = async (recipeId) => {
    console.log(recipeId) // log the recipeId here

    const recipeToSave = recipeData.find(
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
    console.log(savedRecipeIds)
  }

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
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedRecipeIds?.some((savedRecipeId) => savedRecipeId === short.recipeId)}
                      className='btn-block btn-info'
                      onClick={() => handleSaveRecipe(short.recipeId)}>
                      {savedRecipeIds?.some((savedRecipeId) => savedRecipeId === short.recipeId)
                        ? 'This recipe has already been saved!'
                        : 'Save this Recipe!'}
                    </Button>
                  )}
                </div>
              )
            })}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default SearchRecipes
