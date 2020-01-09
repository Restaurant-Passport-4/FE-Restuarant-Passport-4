import React, { useEffect, useContext } from 'react';
import NavBar from '../../navbar';
import { FoodieContext } from '../../../contexts/foodiecontext';
import axiosWithAuth from '../../../components/axiosWithAuth';
import { Button } from 'reactstrap';

const Profile = () => {
    const {user} = useContext(FoodieContext);

    return (
        <div>
            <NavBar />
            <h1>Hello {user.name}!</h1>
            <p>{user.email}</p>
            <p>{user.city}</p>
        </div>
    )
}

export default Profile

