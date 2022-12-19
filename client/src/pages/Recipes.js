
import React from 'react'
import { Card } from 'semantic-ui-react'
import asian from "../assets/asian.jpg"
import caribbean from "../assets/caribbean.jpg"
import indian from "../assets/indian.jpg"
import italian from "../assets/italian.jpg"
import spanish from "../assets/spanish.jpg"

const CardExampleColored = () => (
  <div>
    <h1> Recipes</h1>
  <Card.Group itemsPerRow={5}>
    <Card color='red' image={asian} />
    <Card color='orange' image={spanish} />
    <Card color='yellow' image={indian} />
    <Card color='olive' image={italian} />
    <Card color='green' image={caribbean} />
  </Card.Group>
    </div>
)

export default CardExampleColored