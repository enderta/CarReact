import React from 'react';
import {Modal} from "react-bootstrap";

const ModalCon = (props) => {
    return (
        <div>
            <Modal show={props.show} onHide={() => props.setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.item.name}</Modal.Title>
                </Modal.Header>
            </Modal>
        </div>
    );
};

export default ModalCon;