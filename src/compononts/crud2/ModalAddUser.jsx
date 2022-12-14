import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const ModalAddUser = (props) => {
    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [email, setEmail] = React.useState('');
    const handleChange=(e)=>{
        if(e.target.name==='name'){
            setName(e.target.value);
        }
        if(e.target.name==='surname'){
            setSurname(e.target.value);
        }
        if(e.target.name==='email'){
            setEmail(e.target.value);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            name,
            surname,
            email
        }
        fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err))
        window.location.href = 'http://localhost:3000';
    }
    return (
        <div>
            <Modal show={props.show} onHide={() => props.setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Group className="mb-2" controlId="formBasicEmail" >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name={'name'} value={name} onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Surname</Form.Label>
                            <Form.Control type="text" placeholder="Enter surname" name={'surname'} value={surname} onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" name={'email'} value={email} onChange={handleChange}/>
                        </Form.Group>
                        <button variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </button>
                    </Form>
                </Modal.Body>

            </Modal>


        </div>
    );
};

export default ModalAddUser;