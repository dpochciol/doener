import React, {useState} from 'react';
import { Grid, Image } from 'semantic-ui-react';
import Gallery from './Gallery';
import '../css/PDP.css';
import Carousel from 'react-elastic-carousel';


const Profile = ({current:{gallery_1_url, gallery_2_url, profile_url}}) => {
  return (
      <div>
      <Carousel>
        <Image><img src={profile_url}/></Image>
        <Image><img src={gallery_2_url}/></Image>
        <Image><img src={gallery_1_url}/></Image>
      </Carousel>
      </div>
  )
}

export default Profile;
