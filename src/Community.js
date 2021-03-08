import React from 'react';
import Profile from './components/Profile';
import './css/PDP.css';
import Ratings from './components/Rating'
import StoreLocation from './components/StoreLocation'


const Community = ({values}) => {
  return(
    <div class="ui internally celled grid">
    <div class="row">
      <div class="six wide column">
        <Profile values={values}/>
      </div>
      <div class="nine wide column">
        <p>{values[0].fields.beschreibung}</p>
      </div>
    </div>
    <div class="row">
    <div class="six wide column">
      <Ratings values={values}/>
    </div>
      <div class="nine wide column">
        <p></p>
      </div>
    </div>
    <div class="row">
    <div class="six wide column">
      <StoreLocation values={values}/>
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
