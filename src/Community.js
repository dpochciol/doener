import React from 'react';
import Profile from './components/Profile';
import './css/PDP.css';
import Ratings from './components/Rating'
import StoreLocation from './components/StoreLocation'


const Community = ({current:
                    {storename,
                    profilePicture,
                    gallery,
                    beschreibung,
                    author,
                    location:{lat, lon},
                    ratingBread,
                    ratingMeat,
                    ratingSalad,
                    ratingSauce,
                    totalRating,
                  }}) => {
  return(
    <div class="ui internally celled grid">
    <div class="row">
      <div class="six wide column">
        <Profile values={profilePicture, gallery}/>
      </div>
      <div class="nine wide column">
        <p>{beschreibung}</p>
      </div>
    </div>
    <div class="row">
    <div class="six wide column">
      <Ratings values={ratingBread,
      ratingMeat,
      ratingSalad,
      ratingSauce,
      totalRating}/>
    </div>
      <div class="nine wide column">
        <p></p>
      </div>
    </div>
    <div class="row">
    <div class="six wide column">
      // StoreLocation values={lat,lon}/
    </div>
      <div class="nine wide column">
        <p></p>
      </div>
    </div>
  </div>
  )
}

export default Community;

// <img src={values[0].fields.profilePicture.fields.file.url} className="profilePicture"/>
