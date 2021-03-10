import React, {useState} from 'react';
import Gallery from './Gallery';
import '../css/PDP.css';
import { Grid, Image } from 'semantic-ui-react';

const Profile = ({current}) => {
console.log(current.profilePicture.fields.file.url)
  return (
      <div>
      <Image src={current.profilePicture.fields.file.url} />
      </div>
  )
}

export default Profile;
