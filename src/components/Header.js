import React from 'react';

import Navbar from './Navbar';

const Header = () => {
  return(
    <div className="ui secondary menu">
      <Navbar />
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="search link icon"></i>
          </div>
        </div>
        <a className="ui item">
          Logout
        </a>
      </div>
    </div>
  )
}


export default Header;
