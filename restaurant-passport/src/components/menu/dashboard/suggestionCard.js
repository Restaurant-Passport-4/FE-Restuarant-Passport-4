import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';

const SuggestionCard = (props) => {
    const { id, name, city, address } = props;
    return (
        
        <Card>
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>{city}</CardSubtitle>
          </CardBody>
          <img width="100%" src="" alt="restaurant picture" />
          <CardBody>
            <CardText>{address}</CardText>
            <CardLink href="#">Card Link</CardLink>
          </CardBody>
        </Card>
      
    );
};

export default SuggestionCard;