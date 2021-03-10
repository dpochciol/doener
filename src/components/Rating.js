import React from 'react';
import { Rating, Icon, Table } from 'semantic-ui-react';

const Ratings = ({current}) => {
  return (
    <div class="six wide column">
      <h4>Rating</h4>
      <Table celled striped>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Brot:</Table.Cell>
          <Table.Cell><Rating defaultRating={current.ratingBread} maxRating={10} disabled /></Table.Cell>
          <Table.Cell>{current.ratingBread}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Fleisch:</Table.Cell>
          <Table.Cell><Rating defaultRating={current.ratingMeat} maxRating={10} disabled /></Table.Cell>
          <Table.Cell>{current.ratingMeat}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Salat:</Table.Cell>
          <Table.Cell><Rating defaultRating={current.ratingSalad} maxRating={10} disabled /></Table.Cell>
          <Table.Cell>{current.ratingSalad}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Soße:</Table.Cell>
          <Table.Cell><Rating defaultRating={current.ratingSauce} maxRating={10} disabled /></Table.Cell>
          <Table.Cell>{current.ratingSauce}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Gesamtbewertung:</Table.Cell>
          <Table.Cell><Rating defaultRating={current.totalRating} maxRating={10} disabled /></Table.Cell>
          <Table.Cell>{current.totalRating}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    </div>
  )
}

export default Ratings
