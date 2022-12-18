import React from 'react';

import {Button} from 'react-bootstrap';
import NotesCard from "./NotesCard";
import NotesModal from "./NotesModal";

const Notes = () => {
    const [notes, setNotes] = React.useState([]);

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


    const handleShow = () => setShow(true);
    return (
        <div>
            <div className="app-container">
                <div className="toolbar">
                    <h1 className="toolbar-title">My Notes</h1>
                    <button className={'btn1'} onClick={handleShow}>New Note</button>
                   <NotesModal show={show} setShow={setShow} notes={notes} setNotes={setNotes}/>
                </div>
                <div className="notes-container">
                    <div className="note-card">
                        {
                            notes.map((note) => (
                               <NotesCard note={note} handleDelete={handleDelete} handleShow={handleShow}/>

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