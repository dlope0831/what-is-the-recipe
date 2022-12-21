import React, { useState, useEffect } from "react"
import { Grid, Embed } from "semantic-ui-react"

function TopVids() {
  const [recipeData, setRecipeData] = useState([])
  const [query, setQuery] = useState("foodie")

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

  return (
    <Grid style={{ padding: "55px" }} columns={3} className="topVids" stackable textAlign="center">
      <Grid.Row>
        <Grid.Column>
          {recipeData.map((short, i) => {
            return (
              <div key={i}>
                Title:
                <br />
                <strong> {short.snippet.title} </strong>
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
  )
}

export default TopVids
