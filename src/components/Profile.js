import React, {useState} from 'react';
import { Grid, Image } from 'semantic-ui-react';
import Gallery from './Gallery';
import '../css/PDP.css';
import Carousel from 'react-elastic-carousel';


const Profile = ({current:{gallery, profilePicture}}) => {
  return (
      <div>
      <Carousel>
      <Image src={profilePicture.fields.file.url} />
      {gallery && gallery.map((data) => (
      <Image src={data.fields.file.url} />))}
      </Carousel>
      </div>
  )
}

export default Profile;
