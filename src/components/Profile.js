import React, {useState} from 'react';
import { Grid, Image } from 'semantic-ui-react';
import Gallery from './Gallery';
import '../css/PDP.css';
import Carousel from 'react-elastic-carousel';


const Profile = ({current:{gallery, profile_url}}) => {
  return (
      <div>
      <Carousel>
      <Image src={profile_url} />
      {gallery && gallery.map((data) => (
      <Image src={profile_url} />))}
      </Carousel>
      </div>
  )
}

export default Profile;
