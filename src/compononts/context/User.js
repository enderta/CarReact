import React from 'react';
import {Button, Modal} from "react-bootstrap";
import EditUser from "./EditUser";

const User = ({user}) => {
    const [show, setShow] = React.useState(false);
   const handleClose = () => setShow(false);
    return (

        <>
            <tr>
                <td>
            <Button variant="primary" onClick={() => setShow(true)}>
                Edit
            </Button>


                </td>
                <td>
                    {user.id}
                </td>
                <td>
                    {user.full_name}
                </td>
                <td>
                    {user.email}
                </td>
                <td>
                    {user.group_name}
                </td>
                <td>
                    {user.status}
                </td>
            </tr>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditUser user={user} handleClose={handleClose}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>


        </>
    );
};

export default User;