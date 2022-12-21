import React, { useState, useEffect } from "react"
import { Grid, Input, Embed } from "semantic-ui-react"

import { searchYoutubeShorts } from "../utils/API"


function SearchRecipes() {
  const [recipeData, setRecipeData] = useState([])

  const [inputVal, setInputVal] = useState("")

  const [query, setQuery] = useState("foodie")

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
    </>
  )
}

export default SearchRecipes
