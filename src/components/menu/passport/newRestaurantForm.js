import React, { useState, useContext } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axiosWithAuth from '../../axiosWithAuth';
import { useHistory } from 'react-router-dom';
import { FoodieContext } from '../../../contexts/foodiecontext';

const NewRestaurantForm = () => {
    const history = useHistory()
    const {user, setUser} = useContext(FoodieContext)
    const [input, setInput] = useState({
        name: '',
        city: '',
        address: '',
        description: ''
    })

   

    const changeHandler = e => {
        setInput({ ...input, [e.target.name]: e.target.value});
    };

    const submitEffect = e => {
        e.preventDefault();
        axiosWithAuth()
            .post(`/api/passport/${user.id}`, {...input, user_id: user.id})
            .then(res => {
                console.log(res)
                history.push('/passport')
            })
            .catch(err => console.log(err))
    };

    
    return(
        <div>
            <h1>Add A New Restaurant</h1>
            <Form>
                <FormGroup>
                    <Label for='name'>Restuarant Name</Label>
                    <Input type='text'
                        name='name'
                        id='name'
                        placeholder='Restuarant Name'
                        onChange={changeHandler}/>
                </FormGroup>
                <FormGroup>
                    <Label for='address'>Street Address</Label>
                    <Input type='text'
                        name='address'
                        id='address'
                        placeholder='Street Address'
                        onChange={changeHandler}/>
                </FormGroup>
                    <Label for='city'>City</Label>
                    <Input type='text'
                        name='city'
                        id='city'
                        placeholder='City'
                        onChange={changeHandler}/>
                <FormGroup>
                    <Label for='description'>description</Label>
                    <Input type='text'
                        name='description'
                        id='description'
                        placeholder='Description'
                        onChange={changeHandler}/>
                </FormGroup>
                <Button onClick={submitEffect}>Submit</Button>
            </Form>
        </div>
    );
};

export default NewRestaurantForm;