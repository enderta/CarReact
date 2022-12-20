import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import EditJop from "./EditJop";


const JobTrcTable = (props) => {
    const [show, setShow] = React.useState(false);
    const [name, setName] = React.useState('');
    const [job_title, setJob_title] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [date, setDate] = React.useState('');
    const [result, setResult] = React.useState('');


    const handleEdit = (id) => {
        fetch(`http://localhost:3001/jobs/${id}`, {
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
const handleDelete = (id) => {
    fetch(`http://localhost:3001/jobs/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
        .then(data => {
            console.log(data);
        })

    window.location.reload();
}


    return (

            <tr>
                <td>{props.job.id}</td>
                <td>{props.job.name}</td>
                <td>{props.job.job_title}</td>
                <td>{props.job.description}</td>
                <td>{props.job.date.substring(0,10)}</td>
                <td>{props.job.result}</td>
                <td>
                    <Button variant={"success"} onClick={()=>setShow(true)}>Edit</Button>
                  <Modal show={show} onHide={() => setShow(false)}>
                      <EditJop/>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={()=>setShow(false)}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={() => handleEdit(props.job.id)}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </td>
                <td>
                    <Button variant={"danger"} onClick={()=>handleDelete(props.job.id)}>Delete</Button>
                </td>
            </tr>

    );
};

export default JobTrcTable;