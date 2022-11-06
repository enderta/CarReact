import React from 'react';
import Nav from "./Nav";
import Dash from "./Dash";
import Users from "./Users";
import {Route, Routes} from "react-router";
import Books from "./Books";
import BorrowedBooks from "./BorrowedBooks";
import EditUser from "./EditUser";
import AddUser from "./AddUser";
import ScrollToTop from "../car/ScroolToTop";
import './mainLib.css'
import AddBook from "./AddBook";
import Login from "./Login";



const MainLib = () => {
    return (
        <div>
            <ScrollToTop />
            <Nav />

            <Routes>
                <Route path="/home" element={<Dash/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/users/:id" element={<EditUser/>}/>
                <Route path='/users/add' element={<AddUser/>}/>
                <Route path="/books" element={< Books/>}/>
                <Route path='/books/add' element={<AddBook/>}/>
                <Route path={"/borrowedBooks"} element={<BorrowedBooks/>}/>
              {/*  <Route path="*" element={<Dash/>}/>*/}
            </Routes>
        </div>
    );
};

export default MainLib;