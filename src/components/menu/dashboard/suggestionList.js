import React, { useContext, useEffect} from 'react';
import SuggestionCard from './suggestionCard';
import styled from 'styled-components';
import { FoodieContext } from '../../../contexts/foodiecontext';
import axiosWithAuth from '../../../components/axiosWithAuth';
import { Spinner, Container, Row, Col } from 'reactstrap';

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
       
        {restaurants.map(restaurant =>(
            <Container className="themed-container" fluid={true}>
                <SuggestionCard
                id={restaurant.id}
                name={restaurant.name}
                city={restaurant.city}
                address={restaurant.address}
                addToPassport={addToPassport}
                />
            </Container>
        ))}
        
    );
};

export default SuggestionList;

// const CardBackground = styled.div`
//   background: #ECE6DC;
// `;