import React from 'react';
import {Modal} from "react-bootstrap";

const ModalPaitent = (props) => {

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
        <h2>
            {props.country.name}
        </h2>

    </Modal.Body>
        </div>
    );
};

export default ModalPaitent;