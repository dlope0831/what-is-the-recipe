
import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import asian from "../assets/asian.jpg"
import caribbean from "../assets/caribbean.jpg"
import indian from "../assets/indian.jpg"
import italian from "../assets/italian.jpg"
import spanish from "../assets/spanish.jpg"


const GridExampleDoubling = () => (
  <div>
<h1 class="font-monospace text-center m-4 fs-1 fw-bold" > Recipes</h1> 
  <Grid doubling columns={3}>
    <Grid.Column>
      <Image src={asian} />
    </Grid.Column>
    <Grid.Column>
      <Image src={caribbean}  />
    </Grid.Column>
    <Grid.Column>
      <Image src={indian}  />
    </Grid.Column>
    <Grid.Column>
      <Image src={italian}  />
    </Grid.Column>
    <Grid.Column>
      <Image src={spanish}  />
    </Grid.Column>
    <Grid.Column>
      <Image src={spanish}  />
    </Grid.Column>
  </Grid>
  </div>
  )
  export default GridExampleDoubling