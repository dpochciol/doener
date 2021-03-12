import React from 'react';
import Profile from './components/Profile';
import './css/PDP.css';
import Ratings from './components/Rating'
import StoreLocation from './components/StoreLocation';
import Comments from './components/Comments';
import Moment from 'react-moment';

import { Grid, Image } from 'semantic-ui-react';



const Community = ({current, match}) => {
  console.log(match);
  return(
    <div className="PDP">
    <div>
    <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column width={6} className="ProfileArea">
            <Profile current={current}/>
            <br/>
            <Ratings current={current}/>
          </Grid.Column>
          <Grid.Column width={10} className="Description">
            <h1 className="ProfileTitle">{current.storename}</h1>
            <div><p>{current.beschreibung}</p></div>
            <br/>
            <br/>
            <br/>
            <div className="signature">
            <span>Author: {current.author}</span>
            <span>Released: <Moment fromNow date={current.createdDate}/></span>
            </div>
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
    </div>
  )
}

export default Community;

// <img src={values[0].fields.profilePicture.fields.file.url} className="profilePicture"/>
