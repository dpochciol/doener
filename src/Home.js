import React from 'react';
import Map from './components/HomeMap'
import VisionMission from './components/Vision.js'
import { Grid } from 'semantic-ui-react'
import './css/Leaflet.css'




const Home = () => {
  return(
    <div className="ui grid">
      <div className="ui one column centered row">
        Banner
      </div>

      <div className="ui two column row">

        <div className="nine wide column">
          <VisionMission />
        </div>

        <div className="six wide column">
          <Map />
        </div>

      </div>
    </div>


  )
}

export default Home;
