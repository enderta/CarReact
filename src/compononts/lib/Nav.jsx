import React from 'react';
import {Navbar} from "react-bootstrap";

const Nav = () => {
    return (
        <div>
           <Navbar   bg="dark" variant="dark">
                <Navbar.Brand style={{margin:"10px"}} href="/home">Home </Navbar.Brand>
                <Navbar.Brand href="/users">Users</Navbar.Brand>
                <Navbar.Brand href="/books">Books</Navbar.Brand>
            </Navbar>

        </div>
    );
};

export default Nav;