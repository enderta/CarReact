import React from 'react';
import Cars from "./Cars";

const Owner = (props) => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

            <tr>
                <td>{props.owner.id}</td>
                <td>{props.owner.firstName}</td>
                <td>{props.owner.surname}</td>
                <td>{props.owner.email}</td>
                <td>
                    <button className="btn btn-outline-info" onClick={handleShow}>Cars</button>
                    <Cars id={props.owner.id} show={show} handleClose={handleClose}/>
                </td>

            </tr>



    );
};

export default Owner;