import React from 'react';
import '../css/home.css'



const Footer = () => {
  return(
    <div>
      <div className="ui equal width grid">
        <div className="column">Impressum</div>
        <div className="column">Social Media</div>
        <div className="column">More info</div>
      </div>
      <div className="ui equal width grid">
        <div className="column">address - phone - email</div>
        <div className="column">
          <i className="facebook icon"></i>
          <i className="twitter icon"></i>
          <i className="pinterest icon"></i>
        </div>
        <div className="column">Lorem Ipsum nis pe</div>
      </div>
    </div>

  )
}

export default Footer;
