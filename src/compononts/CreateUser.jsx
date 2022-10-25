import React from 'react';
import {Button, Form} from "react-bootstrap";

const CreateUser = () => {
    const [id, setId] = React.useState('');
    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');

    const handleCreateButton = (e) => {
        e.preventDefault();
        fetch('http://localhost:8081/api/owners', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                firstname: firstname,
                lastname: lastname,
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
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

export default CreateUser;