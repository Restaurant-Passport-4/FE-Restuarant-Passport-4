import React, { useEffect, useContext } from 'react';
import NavBar from '../../navbar';
import { FoodieContext } from '../../../contexts/foodiecontext';
import axiosWithAuth from '../../../components/axiosWithAuth';
import { Button } from 'reactstrap';

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
        <div>
            <NavBar />
            {/* <h1>Hello {profile.name}!</h1>
            <p>{profile.email}</p>
            <p>{profile.password}</p> */}
            <Button color="info" size="lg">Edit</Button>
        </div>
    )
}

export default Profile

