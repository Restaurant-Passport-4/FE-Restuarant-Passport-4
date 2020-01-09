import React, { useEffect, useContext } from 'react';
import NavBar from '../../navbar';
import styled from 'styled-components';
import { FoodieContext } from '../../../contexts/foodiecontext';
import axiosWithAuth from '../../../components/axiosWithAuth';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Profile = () => {
    const {profile, setProfile} = useContext(FoodieContext);
    const {user} = useContext(FoodieContext);

    useEffect(() => {
        const getProfile = () => {
            console.log(user.id)
            axiosWithAuth()
                .get(`/users/${user.id}`)
                .then(res => {
                    console.log(res.data)
                    setProfile({name: res.data.name, email: res.data.email, city: res.data.city})
                })
                .catch(err => console.log(err))
        }
        getProfile();
    }, [])

    return (
        <Background>
            <NavBar />
            {/* <h1>Hello {profile.name}!</h1>
            <p>Email: {profile.email}</p>
            <p>Passowrd: {profile.password}</p> */}
            <Link to = '/editProfile'>   
                <Button color="info" size="lg">Edit Profile</Button>
            </Link> 
        </Background>
    )
}

export default Profile

const Background = styled.div`
    background-color: #ECE6DC;
    height: 100vh;
`;
