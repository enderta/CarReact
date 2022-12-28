import React from 'react';
import Cars from "./Cars";
import AddCars from "./AddCars";

const Owner = (props) => {
    const [show, setShow] = React.useState(false);
    const [show2, setShow2] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    const handleDelete = (id) => {
        fetch(`http://localhost:3001/owners/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        }).then(res => res.json())
            .then(data => {

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
                    <button className="btn btn-outline-info" style={{margin:"10px"}} onClick={handleShow}>Cars</button>
                    <button className="btn btn-outline-success" onClick={handleShow2} >Add Car</button>
                    <Cars id={props.owner.id} show={show} handleClose={handleClose}/>
                    <AddCars id={props.owner.id} show={show2} handleClose={handleClose2}/>




                </td>
                <td>
                    <button className="btn btn-outline-danger" onClick={() => handleDelete(props.owner.id)}>Delete</button>
                </td>

            </tr>



    );
};

export default Owner;