import React, { useContext, useEffect} from 'react';
import SuggestionCard from './suggestionCard';
import styled from 'styled-components';
import { FoodieContext } from '../../../contexts/foodiecontext';
import axiosWithAuth from '../../../components/axiosWithAuth';

const SuggestionList = () => {
    const {restaurants, setRestaurants} = useContext(FoodieContext);

    useEffect(() => {
        const getRestaurants = () => {
            axiosWithAuth()
                .get('/restaurants')
                .then(res => {
                    console.log(res)
                    setRestaurants(res.data)
                })
                .catch(err => console.log(err))
        }
        getRestaurants();
    }, [])

    return(
        <CardCont>
            {restaurants.map(restaurant =>(
                <SuggestionCard
                id={restaurant.id}
                name={restaurant.name}
                city={restaurant.city}
                address={restaurant.address}
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