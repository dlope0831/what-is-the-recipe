import React, { useEffect, useState } from "react"

import { Image, Grid, Embed } from "semantic-ui-react"
import dessert from "../../assets/dessert.jpg"
import asian from "../../assets/asian.jpg"
import caribbean from "../../assets/caribbean.jpg"
import indian from "../../assets/indian.jpg"
import italian from "../../assets/italian.jpg"
import spanish from "../../assets/spanish.jpg"

// import { searchYoutubeShorts } from "../../utils/API"

function Main() {

  const [recipeData, setRecipeData] = useState([])
  const [query, setQuery] = useState("foodie")

  useEffect(() => {
    fetch(`/api/shorts/${query}`)
      .then((resp) => {
        console.log(resp)
        return resp.json()
      })
      .then((ytData) => {
        console.log(typeof ytData)
        console.log(ytData)
        setRecipeData(ytData)
      })
  }, [query])


  const handleClick = async (event) => {
    event.preventDefault()

    setQuery(event.target.alt)
  }

  return (
    <>
      <Grid text="true" style={{ padding: "55px" }} doubling columns={3} stackable>
        <Grid.Row >
          <Grid.Column>
            <Image
              label={{
                size: "medium",
                color: "blue",
                content: "Spanish",
                icon: "utensils",
                ribbon: true,
              }}
              alt="spanish"
              src={spanish}
              size="medium"
              rounded
              onClick={handleClick}
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              label={{
                size: "medium",
                color: "green",
                content: "Italian ",
                icon: "utensils",
                ribbon: true,
              }}
              alt="italian"
              src={italian}
              size="medium"
              rounded
              onClick={handleClick}
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              label={{
                size: "medium",
                color: "orange",
                content: "Indian",
                icon: "utensils",
                ribbon: true,
              }}
              alt="indian"
              src={indian}
              size="medium"
              rounded
              onClick={handleClick}
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              label={{
                size: "medium",
                color: "red",
                content: "East Asian",
                icon: "utensils",
                ribbon: true,
              }}
              alt="east asian"
              src={asian}
              size="medium"
              rounded
              onClick={handleClick}
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              label={{
                size: "medium",
                color: "yellow",
                content: "Caribbean",
                icon: "utensils",
                ribbon: true,
              }}
              alt="caribbean"
              src={caribbean}
              size="medium"
              rounded
              onClick={handleClick}
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              label={{
                size: "medium",
                color: "pink",
                content: "Dessert",
                icon: "utensils",
                ribbon: true,
              }}
              alt="dessert"
              src={dessert}
              size="medium"
              rounded
              onClick={handleClick}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid style={{ padding: "50px" }} columns={2} className="topVids" stackable textAlign="center">
      <Grid.Row>
        <Grid.Column>
          {recipeData.map((short, i) => {
            return (
              <div key={i}>
         <p className="fs-3 m-2 bg-success text-light rounded-top">Title </p>
                <strong> {short.snippet.title} </strong>
                <p className="fs-5 font-italic m-3"><em> Description:</em></p>
                <p className="text-capitalize "> <b>  {short.snippet.description} </b> </p>
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

export default Main ;
