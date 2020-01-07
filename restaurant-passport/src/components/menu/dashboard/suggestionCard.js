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
      
        <CardStyled>
          <CardBody>
            <H3>{name}</H3>
            <CardSubtitle>{city}</CardSubtitle>
          </CardBody>
          <img width="100%" src="" alt="restaurant picture" />
          <CardBody>
            <CardText>{address}</CardText>
            <Link to={`/restaurant/${id}`}>View More</Link>
          </CardBody>
          <ButtonStyled onclick={addToPassport} >Add to passport</ButtonStyled>{' '}
        </CardStyled>
      
     
      
      
    );
};

export default SuggestionCard;

const H3 = styled.h3`
  text-align: center;
`;

const CardStyled = styled.div`
  margin: 20px auto;
  border-radius: 15px;
  border: 2px solid #F5EEE3;
  
`;

const ButtonStyled = styled.button`
  background: #007BFF;
  color: white;
  width: 25%;
`;

// const BtnContainer = styled.div`
//     width: 50%;
//     margin: 10px auto;
//     text-align: center;
// `;

const CardsBox = styled(Card)`
  margin-bottom: 10px;
  width: 100%;
`