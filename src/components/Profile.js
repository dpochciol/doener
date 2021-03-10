import React, {useState} from 'react';
import Gallery from './Gallery';

const Profile = ({current}) => {
console.log(current.profilePicture.fields.file.url)
  return (
    <div>
      <div><img src={current.profilePicture.fields.file.url}/></div>
    </div>
  )
}

export default Profile;
