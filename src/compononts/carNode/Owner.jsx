import React from 'react';
import Cars from "./Cars";

const Owner = (props) => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (id) => {
        fetch(`http://localhost:3001/owners/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        }).then(res => res.json())
            .then(data => {
                props.setOwners(props.owners.filter(owner => owner.id !== id));
            })
        window.location.reload();
    }

    return (

            <tr>
                <td>{props.owner.id}</td>
                <td>{props.owner.name}</td>
                <td>{props.owner.surname}</td>
                <td>{props.owner.email}</td>
                <td>
                    <button className="btn btn-outline-info" onClick={handleShow}>Cars</button>
                    <Cars id={props.owner.id} show={show} handleClose={handleClose}/>
                </td>
                <td>
                    <button className="btn btn-outline-danger" onClick={() => handleDelete(props.owner.id)}>Delete</button>
                </td>

            </tr>



    );
};

export default Owner;