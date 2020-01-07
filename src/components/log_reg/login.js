import React, { useState, useContext} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axiosWithAuth from '../../components/axiosWithAuth';
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
                console.log(user)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user', JSON.stringify(res.data))
                setUser(JSON.parse(localStorage.getItem('user')))
                props.history.push('/dashboard')
            })
    }

    return (
        <div>
            <h1>Login</h1>
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
                <Button type='submit'>Log In</Button>
                <Link to='/register'>New User? Sign Up</Link>
            </Form>
        </div>
    )
}

export default LogIn;