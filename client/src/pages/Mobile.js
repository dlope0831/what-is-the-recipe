import React from 'react'

import breakfast from '../assets/breakfast.jpg'
import dessert from '../assets/dessert.jpg'
import vegan from '../assets/vegan.jpg'
import { Image, Grid} from "semantic-ui-react"


function Mobile() {
    return (
<div>
<Grid container columns={2} stackable>
 <Grid.Row  only='mobile'>
   <Grid.Column>
     <Image
       label={{
         size: "small",
         color: "teal",
         content: "Breakfast",
         icon: "utensils",
         ribbon: true,
       }}
       src={breakfast}
       size="small"
       rounded
     />
   </Grid.Column>
   <Grid.Column >
     <Image
       label={{
         size: "small",
         color: "pink",
         content: "Dessert",
         icon: "utensils",
         ribbon: true,
       }}
       src={dessert}
       size="small"
       rounded
     />
   </Grid.Column>
   <Grid.Column>
     <Image
       label={{
         size: "small",
         color: "green",
         content: "Vegan",
         icon: "utensils",
         ribbon: true,
       }}
       src={vegan}
       size="small"
       rounded
     />
   </Grid.Column>
   </Grid.Row>
   </Grid>
</div>
    )
}

 export default Mobile