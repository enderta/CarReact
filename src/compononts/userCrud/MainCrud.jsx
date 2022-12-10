import React from 'react';
import {Route, Routes} from "react-router";
import Users from "./Users";
import AddUser from "./AddUser";



const MainCrud = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Users/>}/>

                <Route path={'/add'} element={<AddUser/>}/>
            </Routes>
        </div>
    );
};

export default MainCrud;