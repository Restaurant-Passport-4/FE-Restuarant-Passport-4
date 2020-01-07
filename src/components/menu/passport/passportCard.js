import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';


const PassportCard = (props) => {
    const { id, name, city, address } = props;
    return (
        <Link to={`/restaurant/${id}`}>
            <Card>
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardSubtitle>{city}</CardSubtitle>
                    <CardSubtitle>{address}</CardSubtitle>
                </CardBody>
                <img width="100%" src="" alt="restaurant picture" />
                <CardBody>
                    <CardText>{}</CardText>
                </CardBody>
            </Card>
        </Link>
      
    );
};

export default PassportCard;