import React from 'react';
import {Button, Modal} from "react-bootstrap";

const NewAppModal = (props) => {
    const handleClose = () => props.setShow(false);
    return (
        <div>
            <Modal show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Application</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  body
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


        </div>
    );
};

export default NewAppModal;