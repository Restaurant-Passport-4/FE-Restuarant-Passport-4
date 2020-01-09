import React, { useContext } from 'react';
import { FoodieContext } from '../../../contexts/foodiecontext';
import styled from 'styled-components';
import NavBar from '../../navbar.js';
import SuggestionList from './suggestionList';


const Dashboard = () => {
    const { user } = useContext(FoodieContext);
    
    return(
        <Background>
         <NavBar />
         <H1>{user.message}</H1>
         <H2>Here are some suggested restaurants:</H2>
         <div>
            <SuggestionList />
         </div>
        </Background>

    );
};

export default Dashboard;


const Background = styled.div`
    background-color: #ECE6DC;
`;

const H1 = styled.h1`
    text-align: center;
    margin: 15px;
`;

const H2 = styled.h2`
    text-align: center;
    margin: 15px 0;
    padding: 25px 0;
    background-color: #8C2C2C;
    color: #F6EFE5;
`;