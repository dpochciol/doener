import React from 'react';
import '../css/horizontal.css';
import '../js/rating';
import { Link } from "react-router-dom";
import { Rating, Label, Grid } from 'semantic-ui-react';
import Moment from 'react-moment';

const Card = ({value, setCurrentValue}) => {
  console.log(value);
  return(
    <div className="ui card horizontal">
      <div className="image">
        <img style={{height:"170px"}} src={value.profilePicture ? value.profilePicture.fields.file.url : ''} />
      </div>
      <div className="content">
        <Grid >
          <Grid.Row columns={2} color='black'>
            <Grid.Column>
              {value.storename}
            </Grid.Column>
            <Grid.Column textAlign='right'>
              <Link onClick={() => setCurrentValue(value)} className="ui primary basic button" to={`dish/${value.profilePicture.sys.id}`}>Details</Link>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
              {value.kurzbeschreibung}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column>
                <Label as='a' image><img src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />{value.author}</Label>
            </Grid.Column>
            <Grid.Column>

              Released: <Moment fromNow date={value.createdDate}/>
            </Grid.Column>
            <Grid.Column>
              <Rating icon='star' defaultRating={value.totalRating/2} maxRating={5} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  )
}

export default Card;
