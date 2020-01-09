import React, { useEffect, useContext } from 'react';
import NavBar from '../../navbar';
import styled from 'styled-components';
import { FoodieContext } from '../../../contexts/foodiecontext';
import axiosWithAuth from '../../../components/axiosWithAuth';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Profile = () => {
    const {user} = useContext(FoodieContext);

    return (
        <Background>
        
            <NavBar />
            <h1>Hello {user.name}!</h1>
            <p>{user.email}</p>
            <p>{user.city}</p>
        </Background>
    )
}

export default Profile

const Background = styled.div`
    background-color: #ECE6DC;
    height: 100vh;
`;
