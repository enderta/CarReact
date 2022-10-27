import React from 'react';
import {Button, Card, Form} from "react-bootstrap";

const CreateOwner = () => {

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [city, setCity] = React.useState('');
    const [message, setMessage] = React.useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8081/api/owners', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    address: address,
                    email: email,
                    city: city,


                }),
            });
            const data = await response.json();
            console.log(response.status);
            if (response.status === 201) {

                alert("Owmer created successfully");

            } else {
                setMessage("Some error occured");
            }

        } catch (e) {
            console.log(e);
        }
        setFirstName('');
        setLastName('');
        setAddress('');
        setEmail('');
        setCity('');

    }


    return (
        <div>
            <h1>Create Owner</h1>
            <Form>

                <div style={{display: 'flex', justifyContent: 'center',}}>
                    <Card style={{width: "600px", background: "black", color: "red"}}>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter First Name" value={firstName}
                                                  onChange={e => setFirstName(e.target.value)}/>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Last Name" value={lastName}
                                                  onChange={e => setLastName(e.target.value)}/>
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Address" value={address}
                                                  onChange={e => setAddress(e.target.value)}/>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Email" value={email}
                                                  onChange={e => setEmail(e.target.value)}/>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="Enter City" value={city}
                                                  onChange={e => setCity(e.target.value)}/>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </Form>

                </div>
                );
                };

                export default CreateOwner;