import React from 'react';
import NavBar from '../../navbar';
import PassportList from './passportList';
import { Link } from 'react-router-dom';


const Passport = () => {
    
    return(
        <>
        <NavBar />
        <h1>Your Passport</h1>
        <Link to ="/newRestaurant" >Add new restaurant</Link>
        <PassportList />
        </>
    );
};

export default Passport