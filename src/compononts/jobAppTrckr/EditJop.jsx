import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const EditJop = (props) => {

    const [name, setName] = React.useState('');
    const [job_title, setJob_title] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [date, setDate] = React.useState('');
    const [result, setResult] = React.useState('');
    console.log(props.id);
    const handleEdit = () => {
        fetch(`http://localhost:3001/jobs/${props.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                job_title: job_title,
                description: description,
                date: date,
                result: result
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })

        window.location.reload();
    }


    return (
        <div>

                <Modal.Header closeButton>
                    <Modal.Title>Edit Application</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Company Name"
                                            onChange={(e) => setName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Job Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Job Title"
                                            onChange={(e) => setJob_title(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter Description"
                                            onChange={(e) => setDescription(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" placeholder="Enter Date"
                                            onChange={(e) => setDate(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Result</Form.Label>
                            <Form.Control type="text" placeholder="Enter Result"
                                            onChange={(e) => setResult(e.target.value)}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>


        </div>
);
};

export default EditJop;