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
         <H1>Hello {user.name}</H1>
         <H2>Here are some suggested restaurants:</H2>
         <div>
            <SuggestionList />
         </div>
        </Background>

    );
};

export default Dashboard;

// const CardContainer = styled.div`
//     box-sizing: border-box;
//     width: 60%;
//     margin: 20px auto;
//     background-color: #ECE6DC;
//     border-radius: 15px;
//     display: flex;
//     border: 2px solid red;
//     flex-direction: row;
//     flex-wrap: wrap;
//     justify-content: space-around;
// `;
const Background = styled.div`
    background-color: #ECE6DC;
`;

const H1 = styled.h1`
    text-align: center;
    margin: 15px;
`;

const H2 = styled.h2`
    text-align: center;
    margin: 15px;
`;