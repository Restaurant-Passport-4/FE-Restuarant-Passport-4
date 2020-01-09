import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import NavBar from '../../navbar.js';
import axiosWithAuth from '../../axiosWithAuth';

const NewRestaurantForm = () => {
    const [input, setInput] = useState({
        name: '',
        address: '',
        city: '',
        zipcode: '',
        phone: '',
        website: '',
        stars: null,
        notes: ''
    })

   

    const changeHandler = e => {
        setInput({ ...input, [e.target.name]: e.target.value});
    };

    const submitEffect = e => {
        e.preventDefault();
        if(input.zip.legnth !== 5){
            alert('Please enter a valid Zipcode!')
        }
        else{

        };
    };

    
    return(
        <Background>
            <NavBar />
            <H1>Add A New Restaurant</H1>
            <FormContainer>
                <Form>
                    <FormGroup onSubmit={submitEffect}>
                        <Label for='name'>Restuarant Name</Label>
                        <Input type='text'
                            name='name'
                            id='name'
                            placeholder='Restuarant Name'
                            onChange={changeHandler}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for='name'>Street Address</Label>
                        <Input type='text'
                            name='address'
                            id='address'
                            placeholder='Street Address'
                            onChange={changeHandler}/>
                    </FormGroup>
                        <Label for='name'>City</Label>
                        <Input type='text'
                            name='city'
                            id='city'
                            placeholder='City'
                            onChange={changeHandler}/>
                    <FormGroup>
                        <Label for='name'>Zipcode</Label>
                        <Input type='number'
                            name='zipcode'
                            id='zipcode'
                            placeholder='Zipcode'
                            min='5'
                            max='5'
                            onChange={changeHandler}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for='name'>Phone Number</Label>
                        <Input type='tel'
                            name='phone'
                            id='phone'
                            placeholder='Phone Number'
                            onChange={changeHandler}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for='name'>Website</Label>
                        <Input type='text'
                            name='website'
                            id='website'
                            placeholder='website'
                            onChange={changeHandler}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="stars">Rating</Label>
                        <Input type="select" name="stars" id="stars">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Input>
                    </FormGroup>
                <FormGroup>
                        <Label for='name'>Notes</Label>
                        <Input type='textarea'
                            name='notes'
                            id='notes'
                            placeholder=' Example Notes'
                            onChange={changeHandler}/>
                    </FormGroup>
                    <Button type='submit'>Submit</Button>
                </Form>
            </FormContainer>
        </Background>
    );
};

export default NewRestaurantForm;

const Background = styled.div`
    background-color: #ECE6DC;
`;
const FormContainer = styled.div`
    width: 60%;
    margin: 0 auto;
`;
const H1 = styled.h1`
    text-align: center;
    margin: 15px;
`;