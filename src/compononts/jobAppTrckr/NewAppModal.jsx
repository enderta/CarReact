import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const NewAppModal = (props) => {
    const [name, setName] = React.useState('');
    const [job_title, setJob_title] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [date, setDate] = React.useState('');
    const [result, setResult] = React.useState('');

    const handleClose = () => props.setShow(false);
    const handleSave = () => {
        fetch('http://localhost:3001/jobs', {
            method: 'POST',
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
                props.job([...props.jobs, data]);

            })
        window.location.reload();
    }


    return (
        <div>
            <Modal show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Application</Modal.Title>
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
                            <Form.Control type="boolean" placeholder="Enter Result"
                                            onChange={(e) => setResult(e.target.value)}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default NewAppModal;