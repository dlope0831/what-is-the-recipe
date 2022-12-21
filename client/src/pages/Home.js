import React from "react"
import Computer from "../components/Home/Comp"
import Tablet from "../components/Home/Tablet"
import Mobile from "../components/Home/Mobile"


function Home() {


  return (
    <>
      <Computer />

      <Mobile />
      <Tablet />

      {/* <Grid text style={{ padding: "55px" }} columns={3} className="topVids" stackable>
        <Grid.Row>
          <Grid.Column>
            <Embed id={"dlFJjTbMwyM"} source="youtube"/>
            <br />
          </Grid.Column>
          <Grid.Column>
            <Embed id="1AJYxBAYHoI" source="youtube" />
          </Grid.Column>
          <Grid.Column>
            <Embed id="zu0MMLCLcps" source="youtube" />
          </Grid.Column>
        </Grid.Row>
      </Grid> */}
    </>
  )
}

export default Home