import React from 'react';
import {
    Button,
    ButtonGroup,
    Card,
    CardImg,
    Col,
    Container,
    Row
} from 'react-bootstrap';
const Notes = () => {
    const [notes, setNotes] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3001/notes')
            .then(res => res.json())
            .then(data => {
                setNotes(data);
            })
    }, []);

    return (
        <div>
            <div className="album py-5 bg-light">
                <Container>
                    <Row>
                        {
                            notes.map((note) => (
                                <Col md={4}>
                                    <Card className="mb-4 shadow-sm">
                                        <CardImg top width="100%" src={note.image} alt="Card image cap"/>
                                        <Card.Body>
                                            <Card.Title>{note.title}</Card.Title>
                                            <Card.Text>
                                                {note.content}
                                            </Card.Text>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <ButtonGroup>
                                                    <Button variant="outline-secondary">View</Button>
                                                    <Button variant="outline-secondary">Edit</Button>
                                                </ButtonGroup>

                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))

                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Notes;