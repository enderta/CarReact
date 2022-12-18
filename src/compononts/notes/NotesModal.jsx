import React from 'react';
import {Button, Modal} from "react-bootstrap";
import './notes.css'
const NotesModal = (props) => {
    const note=props.note;
    const [content, setContent] = React.useState('');
    const [title, setTitle] = React.useState('');
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
                props.setNotes(props.notes.map(note => note.id === id ? data : note));
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
                props.setNotes([...props.notes, data]);
            })
        window.location.reload();

    }

    return (
        <div>
            <Modal show={props.show} onHide={() => props.setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{note ? 'Edit Note' : 'Add Note'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" placeholder="Enter title"
                                 onChange={(e) => setTitle(e.target.value)}/>
                        <input type="text" className="form-control" id="content" placeholder="Enter content"
                                    onChange={(e) => setContent(e.target.value)}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => props.setShow(false)}>
                        Close
                    </Button>
                    {note ?
                        <Button variant="primary" onClick={() => handleEdit(note.id)}>
                            Edit
                        </Button>
                        :
                        <Button variant="primary" onClick={() => handleAdd()}>
                            Add
                        </Button>
                    }
                </Modal.Footer>
            </Modal>

        </div>
    );
};

export default NotesModal;