import React, { useState } from "react"
import Computer from "../components/Home/Comp"
import Tablet from "../components/Home/Tablet"
import Mobile from "../components/Home/Mobile"
import { Grid, Input } from "semantic-ui-react"

function Home() {
  const [searchState, setSearchState] = useState("")

  const handleSearch = (e) => {
    const searchInput = e.target.value

    setSearchState(searchInput)
  }

  const handleClick = () => {
    console.log(searchState)
  }

  return (
    <>
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
    </>
  )
}

export default Home
