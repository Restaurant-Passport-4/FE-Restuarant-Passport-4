import React, { useContext } from 'react';
import { FoodieContext } from '../../../contexts/foodiecontext';
import styled from 'styled-components';
import NavBar from '../../navbar.js';
import SuggestionList from './suggestionList';


const Dashboard = () => {
    const { user } = useContext(FoodieContext);
    
    return(
        <>
        
         <NavBar />
         <H1>{user.message}</H1>
         <H2>Here are some suggested restaurants:</H2>
         <CardContainer>
            <SuggestionList />
         </CardContainer>
        </>

    );
};

export default Dashboard;

const CardContainer = styled.div`
  width: 60%;
  margin: 20px auto;
  backgroundColor: #ECE6DC;
  border-radius: 15px;
  display: flex;
    border: 2px solid red;
    flex-direction: column;
    align-items: space-around;
`;

const H1 = styled.h1`
    text-align: center;
    margin: 15px;
`;

const H2 = styled.h2`
    text-align: center;
    margin: 15px;
`;