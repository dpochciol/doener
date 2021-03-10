import React from 'react';
import { Rating, Icon, Table } from 'semantic-ui-react';

const Ratings = ({ratingBread,
ratingMeat,
ratingSalad,
ratingSauce,
totalRating}) => {
  return (
    <div class="six wide column">
      <h4>Rating</h4>
      <Table celled striped>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Brot:</Table.Cell>
          <Table.Cell><Rating defaultRating={ratingBread} maxRating={10} disabled /></Table.Cell>
          <Table.Cell>{ratingBread}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Fleisch:</Table.Cell>
          <Table.Cell><Rating defaultRating={ratingMeat} maxRating={10} disabled /></Table.Cell>
          <Table.Cell>{ratingMeat}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Salat:</Table.Cell>
          <Table.Cell><Rating defaultRating={ratingSalad} maxRating={10} disabled /></Table.Cell>
          <Table.Cell>{ratingSalad}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Soße:</Table.Cell>
          <Table.Cell><Rating defaultRating={ratingSauce} maxRating={10} disabled /></Table.Cell>
          <Table.Cell>{ratingSauce}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Gesamtbewertung:</Table.Cell>
          <Table.Cell><Rating defaultRating={totalRating} maxRating={10} disabled /></Table.Cell>
          <Table.Cell>{totalRating}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    </div>
  )
}

export default Ratings
