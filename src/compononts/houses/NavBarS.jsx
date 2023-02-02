import React from 'react';
import {Modal} from "react-bootstrap";
import AddOwner from "./AddOwner.jsx";

const NavBarS = (props) => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className="container">
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
            </div>

        </div>
    );
};

export default NavBarS;