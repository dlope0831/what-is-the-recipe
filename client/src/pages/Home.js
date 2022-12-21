import React from "react"
import Computer from "../components/Home/Comp"
import Tablet from "../components/Home/Tablet"
import Mobile from "../components/Home/Mobile"
import { Grid, Input, Embed } from "semantic-ui-react"

function Home() {
  // const [open, setOpen] = React.useState(false)
  const [searchState, setSearchState] = useState("")


  return (
    <>
    <h1 class="font-monospace text-center m-4 fs-1 fw-bold" > HomePage</h1>
      <Computer />
      <Grid textAlign="center">
        <Grid.Row stretched>
          <Grid.Column>
            <Input
              size="large"
              placeholder="Search for a recipe"
              action={{
                icon: "search",
                onClick: () => {
                  handleClick()
                },
              }}
              onChange={(e) => {
                handleSearch(e)
              }}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Mobile />
      <Tablet />

      <Grid text style={{ padding: "55px" }} columns={3} className="topVids" stackable>
        <Grid.Row>
          <Grid.Column>
            <Embed id="dlFJjTbMwyM" source="youtube"/>
            <br />
          </Grid.Column>
          <Grid.Column>
            <Embed id="1AJYxBAYHoI" source="youtube" />
          </Grid.Column>
          <Grid.Column>
            <Embed id="zu0MMLCLcps" source="youtube" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default Home