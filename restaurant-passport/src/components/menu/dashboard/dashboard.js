import React, { useContext } from 'react';
import { FoodieContext } from '../../../contexts/foodiecontext';
import NavBar from '../../navbar.js';
import SuggestionList from './suggestionList';


const Dashboard = () => {
    const { user } = useContext(FoodieContext);
    
    return(
        <>
         <NavBar />
         <h1>{user.message}</h1>
         <h2>Here are some suggested restaurants:</h2>
         <SuggestionList />
        </>

    );
};

export default Dashboard;