import React from 'react';
import {Navbar} from "react-bootstrap";

const Nav = () => {
    return (
        <div >
           <Navbar variant="dark" style={{border:'1px solid',padding:'10px',margin:"10px"}}>
                <Navbar.Brand  href="/home"><h4 >Home </h4></Navbar.Brand>
                <Navbar.Brand style={{position:"absolute",left:'75%'}} href="/users"><h4>Users</h4></Navbar.Brand>
                <Navbar.Brand style={{position:"absolute",left:'80%'}} href="/books"><h4>Books</h4></Navbar.Brand>
                <Navbar.Brand style={{position:"absolute",left:'85%'}}href="/BorrowedBooks"><h4>Borrowed Books</h4></Navbar.Brand>
               <Navbar.Brand style={{position:"absolute",left:'95%'}}href="/login"><h4>Logout</h4></Navbar.Brand>
                {/*   <Navbar.Brand href="/login">Logout</Navbar.Brand>*/}

            </Navbar>

        </div>
    );
};

export default Nav;