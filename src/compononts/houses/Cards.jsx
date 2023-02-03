import React from 'react';
import House from "./House.jsx";
import {Modal} from "react-bootstrap";
import AddHome from "./AddHome.jsx";

const Cards = (props) => {
    const [show, setShow] = React.useState(false);
    const [showAdd, setShowAdd] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);


    return (
        <>
            <div className="container py-4">
                <div className="col">
                    <div className="card shadow-sm">
                        <img src={props.pic}/>
                        <div className="card-body">
                            <p className="card-text">{props.owner.name}</p>
                            <p className="card-text">{props.owner.email}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary"
                                            onClick={handleShow}>House
                                    </button>
                                    <Modal show={show} onHide={handleClose}>
                                        <House show={show} handleClose={handleClose} id={props.id}/>
                                    </Modal>
                                    <button type="button" className="btn btn-sm btn-outline-secondary"
                                            onClick={handleShowAdd}>Add
                                    </button>
                                    <Modal show={showAdd} onHide={handleCloseAdd}>
                                        <AddHome show={showAdd} handleClose={handleCloseAdd} id={props.id}/>
                                    </Modal>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Cards;