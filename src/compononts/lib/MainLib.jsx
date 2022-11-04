import React from 'react';
import Nav from "./Nav";
import Dash from "./Dash";
import Users from "./Users";
import {Route, Routes} from "react-router";
import Books from "./Books";
import BorrowedBooks from "./BorrowedBooks";



const MainLib = () => {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/home" element={<Dash/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/books" element={< Books/>}/>
                <Route path={"/BorrowedBooks"} element={<BorrowedBooks/>}/>
                <Route path="*" element={<Dash/>}/>
            </Routes>
        </div>
    );
};

export default MainLib;