import React from 'react';
import Nav from "./Nav";
import Dash from "./Dash";
import Users from "./Users";
import {Route, Routes} from "react-router";
import Books from "./Books";



const MainLib = () => {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/home" element={<Dash/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/books" element={< Books/>}/>
            </Routes>
        </div>
    );
};

export default MainLib;