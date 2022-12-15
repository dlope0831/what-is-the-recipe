import React from 'react';

function Header(props) {

  return(
    <div class="ui top inverted attached menu">
      <span class="item link red" onClick={props.onToggleMenu}>Home</span>
    </div>
  );
}

export default Header;