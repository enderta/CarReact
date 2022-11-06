import React from 'react';
import {Navbar} from "react-bootstrap";

const Nav = () => {
    return (
        <div>
           <Navbar    variant="dark" style={{border:'1px solid',padding:'10px'}}>
                <Navbar.Brand href="/home">Home </Navbar.Brand>
                <Navbar.Brand href="/users">Users</Navbar.Brand>
                <Navbar.Brand href="/books">Books</Navbar.Brand>
                <Navbar.Brand href="/BorrowedBooks">Borrowed Books</Navbar.Brand>
                {/*   <Navbar.Brand href="/login">Logout</Navbar.Brand>*/}

            </Navbar>

        </div>
    );
};

export default Nav;