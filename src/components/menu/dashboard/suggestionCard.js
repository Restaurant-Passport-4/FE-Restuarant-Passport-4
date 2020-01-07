import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const SuggestionCard = (props) => {
    const { id, name, city, address, addToPassport } = props;

    return (
        <Card>
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>{city}</CardSubtitle>
          </CardBody>
          <img width="100%" src="" alt="restaurant picture" />
          <CardBody>
            <CardText>{address}</CardText>
            <Link to={`/restaurant/${id}`}>View More</Link>
          </CardBody>
          <Button color="primary" onclick={addToPassport} >Add to passport</Button>{' '}
        </Card>
      
    );
};

export default SuggestionCard;

