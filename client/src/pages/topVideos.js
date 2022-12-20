import React from "react"
import { Grid, Embed } from "semantic-ui-react"

function TopVids() {
  return (
    <Grid style={{ padding: "55px" }} columns={3} className="topVids" stackable>
      <Grid.Row>
        <Grid.Column>
          <Embed
            id="dlFJjTbMwyM"
            source="youtube"
            iframe={{
              allowFullScreen: true,
            }}
            aspectRatio='4:3'
          />
          <br />
        </Grid.Column>
        <Grid.Column>
          <Embed
            id="1AJYxBAYHoI"
            source="youtube"
            iframe={{
              allowFullScreen: true,
            }}
            aspectRatio='4:3'
          />
        </Grid.Column>
        <Grid.Column>
          <Embed
            id="zu0MMLCLcps"
            source="youtube"
            iframe={{
              allowFullScreen: true,
            }}
            aspectRatio='4:3'
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default TopVids
