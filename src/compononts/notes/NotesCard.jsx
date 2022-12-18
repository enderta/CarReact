import React from 'react';
import {Button, ButtonGroup, Card, Modal} from "react-bootstrap";
import NotesModal from "./NotesModal";


const NotesCard = (props) => {
    const note=props.note;
    const [show, setShow] = React.useState(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Card key={note.id} >
                <Card.Body>
                    <Card.Title>{note.title}</Card.Title>
                    <Card.Text>
                        {note.content}
                    </Card.Text>
                    <ButtonGroup aria-label="Basic example">
                        <Button onClick={handleShow}>Edit</Button>
                        <NotesModal note={note} show={show} setShow={setShow}/>
                        <Button variant="danger" onClick={() => props.handleDelete(note.id)}>Delete</Button>
                    </ButtonGroup>
                </Card.Body>
            </Card>
        </div>
    );
};

export default NotesCard;