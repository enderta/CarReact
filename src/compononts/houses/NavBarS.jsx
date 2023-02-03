import React from 'react';
import {Modal} from "react-bootstrap";
import AddOwner from "./AddOwner.jsx";

const NavBarS = (props) => {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className="container py-4">
                <a href="#" className="navbar-brand d-flex align-items-center">
                    <strong>Home Owners</strong>
                    <br/>
                    <span>
                        <form className={"d-flex"} style={{margin: '10px'}}>
                        <input className={"form-control me-2"} type={"search"} placeholder={"Search"}
                               aria-label={"Search"} onChange={props.search}/>
                    </form>
                   </span>
                </a>
                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={handleShow}>Add Owner
                </button>
                <Modal show={show} onHide={handleClose}>
                    <AddOwner show={show} handleClose={handleClose}/>
                </Modal>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Home Management</h1>
                    <p className="col-md-8 fs-4">
                        Using a series of utilities, you can create this jumbotron, just like the
                        one in previous versions of Bootstrap. Check out the examples below for
                        how you can remix and restyle it to your liking.
                    </p>
                    <button className="btn btn-primary btn-lg" type="button">
                        Example button
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default NavBarS;