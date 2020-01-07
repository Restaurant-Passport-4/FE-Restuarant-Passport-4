import React, { useContext, useEffect} from 'react';
import SuggestionCard from './suggestionCard';
import styled from 'styled-components';
import { FoodieContext } from '../../../contexts/foodiecontext';
import axiosWithAuth from '../../../components/axiosWithAuth';
import { Spinner } from 'reactstrap';

const SuggestionList = () => {
    const {restaurants, setRestaurants} = useContext(FoodieContext);
    const {passport, setPassport} = useContext(FoodieContext);

    const addToPassport = restaurant => {
        setPassport(...passport, restaurant)
    }

    useEffect(() => {
        const getRestaurants = () => {
            axiosWithAuth()
                .get('/api/restaurants')
                .then(res => {
                    console.log(res)
                    setRestaurants(res.data)
                })
                .catch(err => console.log(err))
        }
        getRestaurants();
    }, [])
    if (!restaurants) return <div><Spinner type="grow" color="primary" /></div>;
    return(
        <CardCont>
            {restaurants.map(restaurant =>(
                <SuggestionCard
                id={restaurant.id}
                name={restaurant.name}
                city={restaurant.city}
                address={restaurant.address}
                addToPassport={addToPassport}
                />
            ))}
        </CardCont>
    );
};

export default SuggestionList;

const CardCont = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;