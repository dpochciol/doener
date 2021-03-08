import React from 'react';
import '../css/horizontal.css';
import '../js/rating';


const Card = ({value:{author, createdDate, profilePicture, kurzbeschreibung, totalRating}}) => {
  console.log(profilePicture);
  return(
    <div className="ui card horizontal">
      <div className="image">
        <img src={profilePicture ? profilePicture.fields.file.url : ''} />
      </div>
      <div className="content">
        <div className="description">
          {kurzbeschreibung}
          <div className="ui star rating" data-rating="3"></div>
        </div>

        <a className="header">Kristy</a>
        <div className="meta">
          <span className="date">Joined in 2013</span>
        </div>


      </div>
    </div>
  )
}

export default Card;
