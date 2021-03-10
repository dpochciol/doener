import React from 'react';
import Profile from './components/Profile';
import './css/PDP.css';
import Ratings from './components/Rating'
import StoreLocation from './components/StoreLocation'


const Community = ({current}) => {
  return(
    <div className="ui internally celled grid">
    <div className="row">
      <div className="six wide column ProfileArea">
        <Profile current={current}/>
      </div>
      <div className="nine wide column">
        <p>{current.beschreibung}</p>
      </div>
    </div>
    <div className="row">
    <div className="six wide column">
      <Ratings current={current}/>
    </div>
      <div className="nine wide column">
        <p></p>
      </div>
    </div>
    <div className="row">
    <div className="six wide column">
    </div>
      <div className="nine wide column">
        <p></p>
      </div>
    </div>
  </div>
  )
}

export default Community;

// <img src={values[0].fields.profilePicture.fields.file.url} className="profilePicture"/>
