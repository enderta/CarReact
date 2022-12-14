import React from 'react';
import {Button, Modal} from "react-bootstrap";

const ModalAddUser = (props) => {
    return (
        <div>
            <Modal show={props.show} onHide={() => props.setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>Modal body text goes here.</h1>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => props.setShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => props.setShow(false)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


        </div>
    );
};

export default ModalAddUser;