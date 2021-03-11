import React from 'react';
import Profile from './components/Profile';
import './css/PDP.css';
import Ratings from './components/Rating'
import StoreLocation from './components/StoreLocation';
import Comments from './components/Comments';

import { Grid, Image } from 'semantic-ui-react';



const Community = ({current}) => {
  return(
    <div>
    <h1>{current.storename}</h1>
    <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column width={6} className="ProfileArea">
            <Profile current={current}/>
            <br/>
            <Ratings current={current}/>
          </Grid.Column>
          <Grid.Column width={10}>
            <p>{current.beschreibung}</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={6}>
            <StoreLocation current={current}/>
          </Grid.Column>
          <Grid.Column width={10}>
            <Comments/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default Community;

// <img src={values[0].fields.profilePicture.fields.file.url} className="profilePicture"/>
