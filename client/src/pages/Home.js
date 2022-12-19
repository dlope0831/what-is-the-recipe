import React from "react"
import Computer from "../components/Home/Comp"
import Tablet from "../components/Home/Tablet"
import Mobile from "../components/Home/Mobile"
import { Grid, Search } from "semantic-ui-react"

function Home() {
  return (
    <>
      <Computer />
        <Grid textAlign="center">
          <Grid.Row stretched>
            <Grid.Column>
              <Search
                input={{ icon: "search", iconPosition: "left" }}
                size="large"
                placeholder="Search for a recipe"

              />
            </Grid.Column>
          </Grid.Row>
        </Grid>

      <Mobile />
      <Tablet />

    </>
  )
}

export default Home
