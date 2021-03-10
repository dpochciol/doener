import React, {useState} from 'react';
import Gallery from './Gallery';

const Profile = ({profilePicture}) => {

  return (
    <div>
      <div><img src="{profilePicture}"/></div>
    </div>
  )
}

export default Profile;
