import React from 'react';
import {Button, Modal} from "react-bootstrap";

const UserModal = (props) => {


    return (
        <div>
            <Modal show={props.show} onHide={() => props.setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>{props.user.name}</h1>
                    <h1>{props.user.surname}</h1>
                    <h1>{props.user.title}</h1>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => props.setShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default UserModal;