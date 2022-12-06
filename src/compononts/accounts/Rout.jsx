import React from 'react';
import {Route, Routes} from "react-router";
import UserInfo from "./UserInfo";
import Users from "./Users";

const Rout = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Users/>}/>
                <Route path={"/:id"} element={<UserInfo/>}/>

            </Routes>
        </div>
    );
};

export default Rout;