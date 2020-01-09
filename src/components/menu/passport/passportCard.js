import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import axiosWithAuth from '../../axiosWithAuth';
import { useHistory } from 'react-router-dom';


const PassportCard = (props) => {
    const { id, name, city, address } = props;
    const history = useHistory();

    const editPassport = ({id}) => {
        history.pushState(`editpassport/${id}`)
    }

    const deletePassport = ({id}) => {
        axiosWithAuth()
            .delete(`/passports/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err)) 
    }

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
                {/* <button onClick={()=>{editPassport({id})}}>Edit</button>
                <button onClick={()=>{deletePassport({id})}}>Delete</button> */}
            </Card>
        </Link>
      
    );
};

export default PassportCard;