import React from 'react';
import {Accordion, Button, Card, Form, Modal} from "react-bootstrap";


const FaqAccrod = () => {
   const [questions, setQuestions] = React.useState([]);
   const [newQuestion, setNewQuestion] = React.useState('');
    const [newAnswer, setNewAnswer] = React.useState('');
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        fetch('http://localhost:3001/faqa')
            .then(res => res.json())
            .then(data => {
                setQuestions(data);
            })
    }, []);
    const addNewQuestion = () => {
        fetch('http://localhost:3001/faqa', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                question: newQuestion,
                answer: newAnswer
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })
        window.location.reload();
    }
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <div>
            <h1>FAQ</h1>
            <div className="container">
                {
                    questions.map((question) => {
                       return (
                            <div className="row">
                                <div className="col-12">
                                    <Card className={"card"}>
                                        <Accordion>
                                            <Accordion.Item eventKey={question.id}>
                                                <Accordion.Header>{question.question}</Accordion.Header>
                                                <Accordion.Body>{question.answer}</Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>

                                    </Card>
                                </div>

                            </div>
                            );


                    })

                }
            </div>
            <br/>
<div className="container">
                <div className="row">
                    <div className="col-12">
                        <Button variant="primary" onClick={handleShow}>
                            Add New Question
                        </Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Add New Question</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Question</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Question"
                                                        onChange={(e) => setNewQuestion(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Answer</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Answer"
                                                        onChange={(e) => setNewAnswer(e.target.value)}/>
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={addNewQuestion}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
</div>
        </div>

    );
};

export default FaqAccrod;