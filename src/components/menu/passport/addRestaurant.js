import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const AddRestaurant = () => {
    

    return(
        <div>
            <Link to='/newRestaurant'>
                <Button outline color="secondary">Add a New Restaurant</Button>{' '}
            </Link>
        </div>
    );
};

export default AddRestaurant;

