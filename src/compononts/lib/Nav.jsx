import React from 'react';
import {Navbar} from "react-bootstrap";

const Nav = () => {
    return (
        <div>
           <Navbar   bg="dark" variant="dark">
                <Navbar.Brand style={{margin:"10px"}} href="/home">Home </Navbar.Brand>
               <div style={{margin:"10px",position:"%75"}} >
                <Navbar.Brand href="/users">Users</Navbar.Brand>
                <Navbar.Brand href="/books">Books</Navbar.Brand>
                <Navbar.Brand href="/BorrowedBooks">Borrowed Books</Navbar.Brand>
                </div>
            </Navbar>

        </div>
    );
};

export default Nav;