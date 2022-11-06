import React from 'react';
import {Navbar} from "react-bootstrap";

const Nav = () => {
    return (
        <div>
           <Navbar    variant="dark" style={{border:'1px solid',padding:'10px'}}>
                <Navbar.Brand href="/home"><h4>Home </h4></Navbar.Brand>
                <Navbar.Brand href="/users"><h4>Users</h4></Navbar.Brand>
                <Navbar.Brand href="/books"><h4>Books</h4></Navbar.Brand>
                <Navbar.Brand href="/BorrowedBooks"><h4>Borrowed Books</h4></Navbar.Brand>
                {/*   <Navbar.Brand href="/login">Logout</Navbar.Brand>*/}

            </Navbar>

        </div>
    );
};

export default Nav;