import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Axios from 'axios';
// import {
//     Card, CardImg, CardText, CardBody, CardLink,
//     CardTitle, CardSubtitle, Button
//   } from 'reactstrap';

const SuggestionCard = (props) => {
    const { id, name, city, address, addToPassport } = props;
    // const [imgArry, setImgArry] = useState()

    // useEffect(() => {
    //   Axios
    //     .get('https://api.unsplash.com/photos/random?query=restaurant&count=30&client_id=13a19d8fa399e3637a904808fb4a6117734f8b057811badb42583dfa4c60e3fb')
    //     .then(res => {
    //       console.log('this is the unsplash api', res)
    //       setImgArry(res.data);
    //     })
    //     .catch(err => {
    //       console.log('did not recieve data from unsplashed', err)
    //     })
    // },[]);
    // console.log(imgArry);

    return (
      
        <CardStyled>
          <H3>{name}</H3>
          <H3>{city}</H3>
          <img width="100%" src={imgArry[id].urls.small} alt="restaurant picture" />
          <H3>{address}</H3>
          <Link to={`/restaurant/${id}`}>View More</Link>
          <ButtonStyled onClick={addToPassport} >Add to passport</ButtonStyled>
        </CardStyled>
    );
};

export default SuggestionCard;

// const H3 = styled.h3`
//   text-align: center;
// `;

// const CardStyled = styled.div`
//   margin: 20px auto;
//   border-radius: 15px;
//   border: 2px solid #F5EEE3;
//   @media(max-width: 400px){
//     border-bottom: 2px solid #F5EEE3;
//     width: 100%;
//     background-color: white;

//   }
  
// `;

// const ButtonStyled = styled.button`
//   background: #007BFF;
//   color: white;
//   width: 25%;
// `;

// // const BtnContainer = styled.div`
// //     width: 50%;
// //     margin: 10px auto;
// //     text-align: center;
// // `;

// const CardsBox = styled(Card)`
//   margin-bottom: 10px;
//   width: 100%;
// `