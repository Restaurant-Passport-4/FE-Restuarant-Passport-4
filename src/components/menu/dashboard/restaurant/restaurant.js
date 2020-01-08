import React from 'react';
import NavBar from '../../../navbar';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const Restaurant = (props) => {
    const{ id, name, city, address } = props;

    return (
        <div>
          <NavBar />
          <Card>
            <CardImg top width="100%" src="" alt="restaurant photo" />
            <CardBody>
              <CardTitle>{name}</CardTitle>
              <CardSubtitle>{city}</CardSubtitle>
              <CardSubtitle>{address}</CardSubtitle>
              <CardText>description/notes</CardText>
              <Button>Add/Remove To/From Passport</Button>
            </CardBody>
          </Card>
        </div>
      );
};

export default Restaurant