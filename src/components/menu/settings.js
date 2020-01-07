import React from 'react';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';
import NavBar from '../navbar';
const Settings = () => {

    return(
        <div>
            <NavBar />
            <Form>
                <FormGroup>
                    <Label for="exampleCheckbox">Notifications</Label>
                    <div>
                        <CustomInput type="switch" 
                            id="deals" 
                            name="deals" 
                            label="New Deals" />
                        <CustomInput type="switch" 
                            id="friendJoins" 
                            name="friendJoins" 
                            label="Facebook Friend Joins" />
                        <CustomInput type="switch" 
                            id="friendVisits" 
                            name="friendVisits" 
                            label="Facebook Friend Visits A Restuarant On Your Passport" />
                        <CustomInput type="switch" 
                            id="friendAdds" 
                            name="friendAdds" 
                            label="Friend Adds a Restuarant To Their Passport" />
                        <CustomInput type="switch" 
                            id="newRestaurant" 
                            name="newRestaurant" 
                            label="New Restaurant In Your Area" />
                    </div>
                </FormGroup>
            </Form>
      </div>
    )

}

export default Settings;