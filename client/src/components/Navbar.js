import React  from 'react';


const Sidebar = () => {
    return(
        <>
<div class="ui secondary  menu">
  <a class="active item">
    Home
  </a>
  <a class="item">
   Recipes
  </a>
  <a class="item">
   Your saved
  </a>
  <div class="right menu">
    <div class="item">
      <div class="ui icon input">
        <input type="text" placeholder="Search..."/>
        <i class="search link icon"></i>
      </div>
    </div>
    <a class="ui item">
      Logout
    </a>
  </div>
</div>
</>
);
    }

export default Sidebar;