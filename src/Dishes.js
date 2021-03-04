import React from 'react';
import Card from './components/Card';


const Dish = () => {
  return(
    <div className="ui link cards">
      <div className="ui grid">
        <div className="six wide column image">
          <img src="/images/avatar2/large/matthew.png" />
        </div>
        <div className="ten wide column content">
          <div className="header">Matt Giampietro</div>
          <div className="meta">
            <a>Friends</a>
          </div>
          <div className="description">
            Matthew is an interior designer living in New York.
          </div>
        </div>

        <div className="ten wide extra content">
          <span className="right floated">
            <div className="ui image label">
              <img src="/images/avatar/small/ade.jpg" />
              Adrienne
            </div>
          </span>
          <span>
          <div className="ui label">
            <i className=""></i> Created at
          </div>
          </span>
          <span>
            <i className="user icon"></i>
            Rating
          </span>
        </div>
        <div className="six wide extra content">
        Continue
        </div>
      </div>
    </div>

  )
}

export default Dish;