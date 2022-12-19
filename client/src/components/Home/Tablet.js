import React from "react"

import { Image, Grid } from "semantic-ui-react"

import breakfast from "../../assets/breakfast.jpg"
import vegan from "../../assets/vegan.jpg"
import italian from "../../assets/italian.jpg"
import spanish from "../../assets/spanish.jpg"

function Tablet() {
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
              src={spanish}
              size="medium"
              rounded
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
              src={italian}
              size="medium"
              rounded
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
              src={breakfast}
              size="medium"
              rounded
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
              src={vegan}
              size="medium"
              rounded
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default Tablet
