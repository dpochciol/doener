import React from 'react';
import '../css/horizontal.css';
import '../js/rating';
import { Link } from "react-router-dom";



const Card = ({value, setCurrentValue}) => {
  



  return(
    <div className="ui card horizontal">
      <div className="image">
        <img src={value.profilePicture ? value.profilePicture.fields.file.url : ''} />
      </div>
      <div className="content">
        <div className="description">
          {value.kurzbeschreibung}
          <div className="ui star rating" data-rating="3"></div>
        </div>
        
        <a className="header">Kristy</a>
        <div className="meta">
          <span className="date">Joined in 2013</span>
          <Link onClick={() => setCurrentValue(value)} className="ui primary basic button" to="community">Details</Link>
        </div>
        

      </div>
    </div>
  )
}

export default Card;