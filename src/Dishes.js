import React from 'react';
import Card from './components/Card';
import './css/horizontal.css';
import { Pagination } from 'semantic-ui-react';

const Dish = ({values, setCurrentValue}) => {
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
        defaultActivePage={1}
        totalPages={3}
        onPageChange={onPaginationClick}
      />
      </div>
      <div className="six wide column min-500">
      </div>
    </div>
  )
}

export default Dish;