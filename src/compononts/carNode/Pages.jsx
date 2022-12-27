import React from 'react';
import {Route, Routes} from "react-router";
import Owners from "./Owners";
import LoginReg from "./LoginReg";

const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path="/*" element={<LoginReg/>}/>
                <Route path="/home" element={<Owners/>}/>
            </Routes>
        </div>
    );
};

export default Pages;