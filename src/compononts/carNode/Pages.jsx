import React from 'react';
import {Route, Routes} from "react-router";
import Owners from "./Owners";
import LoginReg from "./LoginReg";
import ScrollToTop from "../car/ScroolToTop";

const Pages = () => {
    return (
        <div>
            <ScrollToTop />
            <Routes>
                <Route path="/*" element={<LoginReg/>}/>
                <Route path="/home" element={<Owners/>}/>
            </Routes>
        </div>
    );
};

export default Pages;