import React from "react"

import { Image, Grid } from "semantic-ui-react"

import asian from "../../assets/asian.jpg"
import caribbean from "../../assets/caribbean.jpg"
import indian from "../../assets/indian.jpg"
import italian from "../../assets/italian.jpg"
import spanish from "../../assets/spanish.jpg"

function Computer() {
  return (
    <div>
      <Grid text style={{ marginTop: "7em" }} columns={5}>
        <Grid.Row  only="computer">
          <Grid.Column>
            <Image
              label={{
                size: "medium",
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
                size: "medium",
                color: "green",
                content: "Italian ",
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
                size: "medium",
                color: "orange",
                content: "Indian",
                icon: "utensils",
                ribbon: true,
              }}
              src={indian}
              size="medium"
              rounded
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
              src={asian}
              size="medium"
              rounded
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
              src={caribbean}
              size="medium"
              rounded
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default Computer
