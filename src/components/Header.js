import React from 'react';

import Navbar from './Navbar';

const Header = () => {
  return(
    <div class="ui secondary  menu">
      <Navbar />
      <div class="right menu">
        <div class="item">
          <div class="ui icon input">
            <input type="text" placeholder="Search..." />
            <i class="search link icon"></i>
          </div>
        </div>
        <a class="ui item">
          Logout
        </a>
      </div>
    </div>
  )
}


export default Header;