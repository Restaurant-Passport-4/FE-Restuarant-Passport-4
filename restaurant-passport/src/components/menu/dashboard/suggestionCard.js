import React from 'react';
import NavBar from '../../navBar';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';

const SuggestionCard = () => {
    
    return (
        <div>
        <Card>
          <CardBody>
            <CardTitle>Restaurant title</CardTitle>
            <CardSubtitle>Restaurant subtitle</CardSubtitle>
          </CardBody>
          <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
          <CardBody>
            <CardText>Description Text (optional)</CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
      </div>
    );
};

export default SuggestionCard;