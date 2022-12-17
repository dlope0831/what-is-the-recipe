import React  from 'react';
import { Button} from 'semantic-ui-react'
const Sidebar = () => {
    return(
        <>
<div class="ui secondary menu" >
  <a href='/' class="active item">
    Home
  </a>
  <a class="item" color='pink'>
   Recipes
  </a>
  <a class="item">
   Your saved
  </a>
  <div class="right menu">
    <div class="item">
    </div>
    <a href='/login' class="ui item">
      Login
    </a>
   <Button>
        <a href="/signup">Sign Up</a>
        </Button>
  </div>
</div>
</>
);
    }

export default Sidebar;