import React from 'react';
import {Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
//navbar for resume page home, about, contact, portfolio
const Nav = () => {
    return (
        <div>
            <Navbar  className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className={'navbar-brand'} to={'/home'}>Home</Link>
                    <Link className={'navbar-brand'} to={'/about'}>About</Link>
                    <Link className={'navbar-brand'} to={'/contact'}>Contact</Link>
                    <Link className={'navbar-brand'} to={'/portfolio'}>Portfolio</Link>
                </div>
            </Navbar>
        </div>
    );
};


export default Nav;