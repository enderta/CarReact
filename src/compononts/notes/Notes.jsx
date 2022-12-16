import React from 'react';
import './notes.css'
import {
    Button,
    ButtonGroup,
    Card,
    CardImg,
    Col,
    Container, Modal,
    Row
} from 'react-bootstrap';
const Notes = () => {
    const [notes, setNotes] = React.useState([]);
    const [content, setContent] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        fetch('http://localhost:3001/notes')
            .then(res => res.json())
            .then(data => {
                setNotes(data);
            })
    }, []);
    const handleDelete = (id) => {
        fetch(`http://localhost:3001/notes/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                setNotes(notes.filter(note => note.id !== id));
            })
        window.location.reload();
    }
    const handleEdit = (id) => {
        fetch(`http://localhost:3001/notes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                content: content
            })
        }).then(res => res.json())
            .then(data => {
                setNotes(notes.map(note => note.id === id ? data : note));
            })
        window.location.reload();
    }

    const handleAdd = () => {
        fetch('http://localhost:3001/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                content: content
            })
        }).then(res => res.json())
            .then(data => {
                setNotes([...notes, data]);
            })
        window.location.reload();

    }
    const handleShow = () => setShow(true);
    return (
        <div>
            <div className="app-container">
                <div className="toolbar">
                    <h1 className="toolbar-title">My Notes</h1>
                    <Button className="toolbar-button" onClick={handleShow}>New Note</Button>
                    <Modal show={show} onHide={() => setShow(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Note</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
                            <input type="text" placeholder="Content" onChange={(e) => setContent(e.target.value)}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShow(false)}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleAdd}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className="notes-container">
                    <div className="note-card">
                        {
                            notes.map((note) => (
                                <Card key={note.id} >
                                    <Card.Body>
                                        <Card.Title>{note.title}</Card.Title>
                                        <Card.Text>
                                            {note.content}
                                        </Card.Text>
                                        <ButtonGroup aria-label="Basic example">
                                            <Button onClick={handleShow}>Edit</Button>
                                            <Modal show={show} onHide={() => setShow(false)}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Edit Note</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
                                                    <input type="text" placeholder="Content" onChange={(e) => setContent(e.target.value)}/>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={() => setShow(false)}>
                                                        Close
                                                    </Button>
                                                    <Button variant="primary" onClick={()=>handleEdit(note.id)}>
                                                        Save Changes
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>

                                            <Button variant="danger" onClick={() => handleDelete(note.id)}>Delete</Button>
                                        </ButtonGroup>
                                    </Card.Body>
                                </Card>

                            ))
                        }
                        <div className="note-footer">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notes;