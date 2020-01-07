import React, { useEffect, useContext } from 'react';
import PassportCard from './passportCard';
import AddRestaurant from './addRestaurant';
import { FoodieContext } from '../../../contexts/foodiecontext';
import axiosWithAuth from '../../../components/axiosWithAuth';
import styled from 'styled-components';

const PassportList = () => {
    const {passport, setPassport} = useContext(FoodieContext);

    useEffect(() => {
        const getPassport = () => {
            axiosWithAuth()
                .get('/user/:userid/passport')
                .then(res => setPassport(res.data))
                .catch(err => console.log(err))
        }
        getPassport();
    },[])

    return(
        <div>
            <AddRestaurant />
            <PassCardCont>
                {passport.map(restaurant => (
                    <PassportCard
                    id={restaurant.id}
                    name={restaurant.name}
                    city={restaurant.city}
                    address={restaurant.address}
                    />
                ))}
        </PassCardCont>
        </div>
    );
};

export default PassportList;

const PassCardCont = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    flex-wrap:wrap
`