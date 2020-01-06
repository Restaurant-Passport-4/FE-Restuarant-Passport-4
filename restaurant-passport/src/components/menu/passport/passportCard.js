import React, { useContext } from 'react';
import styled from 'styled-components';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import axiosWithAuth from '../../../contexts/axiosWithAuth';

const PassportCard = (props) => {
    // const { id, name, city, address } = props;
    // const restaurantid = id;

    // const deleteTrip = ({id}) => {
    //     axiosWithAuth()
    //         .delete(`/user/:userid/passport/${restaurantid}`)
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // }

    return (
        <div>
            <Card inverse>
                <CardImg width="100%" src="" alt="preview of restaurant" />
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{city}</CardText>
                    <CardText>{address}</CardText>
                </CardImgOverlay>
            </Card>
        </div>
    );
};

export default PassportCard;