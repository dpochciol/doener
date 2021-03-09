import { render } from '@testing-library/react';
import React from 'react';
import Card from './components/Card';
import Video from './components/Video';
import './css/horizontal.css';



const Dish = ({values, setCurrentValue}) => {
  console.log(values);


const renderCards = values.map(({fields}) => {


  // console.log(fields);
  return(
    <Card value={fields} setCurrentValue={setCurrentValue} />
  )
})

  return(
    <div className="ui two column centered grid">
      <div className="nine wide column">

        {renderCards}

      </div>
      <div className="six wide column min-500">
        <Video />
      </div>
    </div>
  )
}

export default Dish;