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
          <CardH2>{name}</CardH2>
          <CardH4>{city}</CardH4>
          <CardH4>{address}</CardH4>
          <img width="100%" src="" alt="restaurant picture" />
          <ButtonCont>
            <Link to={`/restaurant/${id}`}><Button color="primary" size="lg">View More</Button></Link>
            <Button color="primary" size="lg" onclick={addToPassport}>Add to passport</Button>
          </ButtonCont>
        </CardStyled>
      
    );
};

export default SuggestionCard;

const ButtonCont = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  margin: 25px auto;
`;
// const ButtonStyled = styled.button`
//   width: 30%;
//   border-radius: 15px;
//   color: white;
//   background-color: #8C2C2C;
//   height: 40px;
//   border: 3px solid #F6EFE5
//   &:hover{
//    background-color: #F6EFE5;
//    border: 3px solid #8C2C2C;
//    }
// `;
const CardStyled = styled.div`
  width: 46%;
  background-color: #ECE6DC;
  border: 2px solid #8C2C2C;
  border-radius: 15px;
  margin: 20px 2%;
  @media(max-width: 400px) {
    width: 85%;
  }
`;
const CardH2 = styled.h2`
  text-align: center;
  margin-top: 10px;
`;
const CardH4 = styled.h4`
  text-align: center;
`;

