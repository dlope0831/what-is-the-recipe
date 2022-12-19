import React from "react"

import { Image, Grid } from "semantic-ui-react"

import breakfast from "../../assets/breakfast.jpg"
import vegan from "../../assets/vegan.jpg"
import italian from "../../assets/italian.jpg"
import spanish from "../../assets/spanish.jpg"

function Tablet() {
  const handleClick = (event) => {
    console.log(event.target.alt)
  }
  return (
    <div>
      <Grid container columns={2} stackable>
        <Grid.Row only="tablet">
          <Grid.Column>
            <Image
              label={{
                size: "huge",
                color: "blue",
                content: "Spanish",
                icon: "utensils",
                ribbon: true,
              }}
              alt='spanish'
              src={spanish}
              size="medium"
              rounded
              onClick={handleClick}
            />
          </Grid.Column>

          <Grid.Column>
            <Image
              label={{
                size: "huge",
                color: "red",
                content: "Italian",
                icon: "utensils",
                ribbon: true,
              }}
              alt='italian'
              src={italian}
              size="medium"
              rounded
              onClick={handleClick}
            />
          </Grid.Column>

          <Grid.Column>
            <Image
              label={{
                size: "huge",
                color: "yellow",
                content: "Breakfast",
                icon: "utensils",
                ribbon: true,
              }}
              alt='breakfast'
              src={breakfast}
              size="medium"
              rounded
              onClick={handleClick}
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              label={{
                size: "huge",
                color: "green",
                content: "Vegan ",
                icon: "utensils",
                ribbon: true,
              }}
              alt='vegan'
              src={vegan}
              size="medium"
              rounded
              onClick={handleClick}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default Tablet
