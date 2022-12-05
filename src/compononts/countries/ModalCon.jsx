import React from 'react';
import {Modal} from "react-bootstrap";

const ModalCon = (props) => {
    return (
        <div>
            <Modal show={props.show} onHide={() => props.setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.item.name}</Modal.Title>
                    <Modal.Body>
                        <p>Capital: {props.item.capital}</p>
                        <p>Region: {props.item.region}</p>
                        <p>Population: {props.item.population}</p>
                        <p>Area: {props.item.area}</p>
                        <p>Native Name: {props.item.nativeName}</p>
                        <p>Sub Region: {props.item.subregion}</p>
                        <p>Top Level Domain: {props.item.topLevelDomain}</p>
                    </Modal.Body>
                </Modal.Header>
            </Modal>
        </div>
    );
};

export default ModalCon;