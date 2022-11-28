import React from 'react';
import {Modal} from "react-bootstrap";

const EditPat = (props) => {
    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>Country</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    <h1>
                        {props.patient.firstName}
                    </h1>}
            </Modal.Body>

        </div>
    );
};

export default EditPat;