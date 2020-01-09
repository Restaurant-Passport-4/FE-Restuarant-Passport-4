import React, { useState, useContext} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axiosWithAuth from '../../components/axiosWithAuth';
import styled from 'styled-components';
import { FoodieContext } from '../../contexts/foodiecontext';
import { Link } from 'react-router-dom';

const LogIn = props => {
    const {user, setUser} = useContext(FoodieContext)
    const [userInput, setUserInput] = useState({username: '', password: ''})

    const handleChanges = e => {
        setUserInput({...userInput, [e.target.name]: e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/auth/login', userInput)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user', JSON.stringify(res.data.user))
                setUser(JSON.parse(localStorage.getItem('user')))
                console.log(user)
                props.history.push('/dashboard')
            })
            .catch(err => console.log(err))
    }

    return (
        <FormContainer>
            <H1>Login</H1>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label for='username'>Username</Label>
                    <Input type='text' 
                    name='username' 
                    id='username' 
                    placeholder='Username'
                    onChange={handleChanges} />
                </FormGroup>
                <FormGroup>
                    <Label for='password'>Password</Label>
                    <Input type='password'
                    name='password' 
                    id='password'
                    placeholder='Password'
                    onChange={handleChanges} />
                </FormGroup>
                <BtnContainer>
                    <Button type='submit'>Log In</Button>
                    <Link to='/register'>New User? Sign Up</Link>
                </BtnContainer>
            </Form>
        </FormContainer>
    )
}

export default LogIn;

const H1 = styled.h1`
    text-align: center;
    margin: 15px;
`;

const FormContainer = styled.div`
    width: 60%;
    margin: 0 auto;
`;

const BtnContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px auto;
    text-align: center;
`;