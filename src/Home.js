import React from 'react';
import Map from './components/HomeMap'
import Banner from './components/Banner.js'
import VisionMission from './components/Vision.js'
import { Grid } from 'semantic-ui-react'
import './css/Leaflet.css'




const Home = ({values}) => {
  return(
    <div className="ui grid">
      <div className="ui one column centered row">
        <Banner />
      </div>

      <div className="ui two column centered row">

        <div className="nine wide column">
          <VisionMission />
        </div>

        <div className="six wide column">
          <Map values={values}/>
        </div>

      </div>
    </div>


  )
}

export default Home;
