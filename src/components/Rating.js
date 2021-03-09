import React from 'react';
import { Rating, Icon, Table } from 'semantic-ui-react';

const Ratings = ({values}) => {
  return (
    <div class="six wide column">
      <h4>Rating</h4>
      <Table celled striped>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Brot:</Table.Cell>
          <Table.Cell><Rating defaultRating={values[0].fields.ratingBread} maxRating={10} disabled /></Table.Cell>
          <Table.Cell>{values[0].fields.ratingBread}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Fleisch:</Table.Cell>
          <Table.Cell><Rating defaultRating={values[0].fields.ratingMeat} maxRating={10} disabled /></Table.Cell>
          <Table.Cell>{values[0].fields.ratingMeat}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Salat:</Table.Cell>
          <Table.Cell><Rating defaultRating={values[0].fields.ratingSalad} maxRating={10} disabled /></Table.Cell>
          <Table.Cell>{values[0].fields.ratingSalad}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Soße:</Table.Cell>
          <Table.Cell><Rating defaultRating={values[0].fields.ratingSauce} maxRating={10} disabled /></Table.Cell>
          <Table.Cell>{values[0].fields.ratingSauce}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Gesamtbewertung:</Table.Cell>
          <Table.Cell><Rating defaultRating={values[0].fields.totalRating} maxRating={10} disabled /></Table.Cell>
          <Table.Cell>{values[0].fields.totalRating}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    </div>
  )
}

export default Ratings
