import React from 'react'

import breakfast from '../../assets/breakfast.jpg'
import dessert from '../../assets/dessert.jpg'
import vegan from '../../assets/vegan.jpg'
import { Image, Grid} from "semantic-ui-react"


function Mobile() {
  const handleClick = () => {

  }
    return (
      
<>
<Grid container columns={2} stackable>
 <Grid.Row  only='mobile'>
   <Grid.Column>
     <Image
       label={{
         size: "huge",
         color: "teal",
         content: "Breakfast",
         icon: "utensils",
         ribbon: true,
       }}
       src={breakfast}
       size="huge"
       rounded
       onClick={handleClick}
     />
   </Grid.Column>
   <Grid.Column >
     <Image
       label={{
         size: "huge",
         color: "pink",
         content: "Dessert",
         icon: "utensils",
         ribbon: true,
       }}
       src={dessert}
       size="huge"
       rounded
     />
   </Grid.Column>
   <Grid.Column>
     <Image
       label={{
         size: "huge",
         color: "green",
         content: "Vegan",
         icon: "utensils",
         ribbon: true,
       }}
       src={vegan}
       size="huge"
       rounded
     />
   </Grid.Column>
   </Grid.Row>
   </Grid>
</>
    )
}

 export default Mobile