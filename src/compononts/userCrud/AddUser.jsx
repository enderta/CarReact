import React from 'react';
import {Button, Form, FormGroup} from "react-bootstrap";

const AddUser = () => {
    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [title, setTitle] = React.useState('');
    const handleChange=(e)=>{
        if(e.target.name==='name'){
            setName(e.target.value);
        }
        if(e.target.name==='surname'){
            setSurname(e.target.value);
        }
        if(e.target.name==='title'){
            setTitle(e.target.value);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            name,
            surname,
            title
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
            <h1>Add User</h1>
            <Form  style={{height:"200px",width:"200px",border:"1px"}}>
                <Form.Group className="mb-2" controlId="formBasicEmail" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name={'name'} value={name} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type="text" placeholder="Enter surname" name={'surname'} value={surname} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" name={'title'} value={title} onChange={handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    );
};
export default AddUser;