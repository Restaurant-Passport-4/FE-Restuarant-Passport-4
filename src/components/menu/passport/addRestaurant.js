import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const AddRestaurant = () => {
    

    return(
        <Background>
            <Link to='/newRestaurant'>
                <Button outline color="secondary">Add a New Restaurant</Button>{' '}
            </Link>
        </Background>
    );
};

export default AddRestaurant;

const Background = styled.div`
    background-color: #ECE6DC;
`;

