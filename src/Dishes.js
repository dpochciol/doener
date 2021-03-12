import React from 'react';
import Card from './components/Card';
import './css/horizontal.css';
import { Pagination } from 'semantic-ui-react';
import ReactPlayer from 'react-player'

import Diashow from './components/Diashow';




const Dish = ({values, setCurrentValue, setCurrentPage, page}) => {

  const onPaginationClick = () => {
    console.log('hallo');
  }

  const renderCards = values.map(({fields}, index) => {
    return(
      <Card key={index} value={fields} setCurrentValue={setCurrentValue} />
    )
  })


  return(
    <div className="ui two column centered grid">
      <div className="nine wide column">
        {renderCards}
        <Pagination
        onPageChange={setCurrentPage}
        defaultActivePage={page}
        activePage={page}
        totalPages={5}
      />
      </div>
      <div className="six wide column min-500 container">
          <ReactPlayer width="100%" url='https://youtu.be/9Id4ZWnqIwQ' loop="true" />
          <div className="ui hidden divider"></div>
          <Diashow />
      </div>

    </div>
  )
}

export default Dish;
