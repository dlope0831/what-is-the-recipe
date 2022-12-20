import React, { useState } from "react"

import { Grid, Input } from "semantic-ui-react"

function Search() {
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
    </>
  )
}

export default Search
