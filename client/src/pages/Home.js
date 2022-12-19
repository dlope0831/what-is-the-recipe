import React from "react"
import asian from "../assets/asian.jpg"
import caribbean from "../assets/caribbean.jpg"
import indian from "../assets/indian.jpg"
import italian from "../assets/italian.jpg"
import spanish from "../assets/spanish.jpg"
import { Header, Image, Grid } from "semantic-ui-react"


function Home() {
  return (
    <div>
      <Computer />
      <p>
        <Grid textAlign="center">
          <Grid.Row stretched>
            <Grid.Column>
              <Search
                input={{ icon: "search", iconPosition: "left" }}
                size="medium"
                placeholder="Search for a recipe"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </p>
      <p>
      <Mobile />
      <Tablet />
      </p>
    </div>
  )
}

export default Home