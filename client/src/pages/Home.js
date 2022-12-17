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
     <Header as="h2" inverted textAlign="center" color= "blue">
        Home <br/>
   
     </Header>
      <Grid text style={{ marginTop: "7em" }}>
        <Grid.Row columns={5}>
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

export default Home
