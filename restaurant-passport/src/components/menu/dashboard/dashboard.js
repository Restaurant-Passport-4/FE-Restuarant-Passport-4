import React, { useContext } from 'react';
import { FoodieContext } from '../../../contexts/foodiecontext';
import NavBar from '../../navbar.js';
import SuggestionList from './suggestionList';


const Dashboard = () => {
    const { user } = useContext(FoodieContext);
    
    return(
        <>
         <NavBar />
         <SuggestionList />
        </>

    );
};

export default Dashboard;