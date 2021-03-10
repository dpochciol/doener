import React from 'react';
import '../css/horizontal.css';
import '../js/rating';
import { Link } from "react-router-dom";
import { Rating } from 'semantic-ui-react'

const Card = ({value, setCurrentValue}) => {
  // console.log(value);
  return(
    <div className="ui card horizontal">
      <div className="image">
        <img src={value.profilePicture ? value.profilePicture.fields.file.url : ''} />
      </div>
      <div className="content">
        <span className="header">{value.storename}</span>
        <Rating icon='star' defaultRating={value.totalRating/2} maxRating={5} />
        <span><Link onClick={() => setCurrentValue(value)} className="ui primary basic button" to="community">Details</Link></span>
        <div className="description">
          {value.kurzbeschreibung}
          <div className="ui star rating" data-rating="3"></div>
        </div>
        <div className="meta">
          <span className="date">Joined: {value.createdDate}</span>
        </div>
      </div>
    </div>
  )
}

export default Card;