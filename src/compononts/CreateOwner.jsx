import React from 'react';
import {Button, Form} from "react-bootstrap";

const CreateOwner = () => {
   const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [email, setEmail] = React.useState('');
    const []

    const handleCreateButton = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8081/api/owners', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({


                }),
            });
            const data = await response.json();
            console.log(response.status);
            if (response.status === 201) {

                alert("Car created successfully");

            } else {
                setMessage("Some error occured");
            }

        } catch (e) {
            console.log(e);
        }
    }



    return (
        <div>
            <h1>Create User</h1>
            <Form onSubmit={handleCreateButton}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Id</Form.Label>
                    <Form.Control type="text" placeholder="Enter id" onChange={e => setId(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Firstname</Form.Label>
                    <Form.Control type="text" placeholder="Enter firstname" onChange={e => setFirstname(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control type="text" placeholder="Enter lastname" onChange={e => setLastname(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create
                </Button>
            </Form>


        </div>
    );
};

export default CreateOwner;