import React from 'react';
import {Route, Routes} from "react-router";
import Login from "./Login";
import MainLib from "./MainLib";

const LoginPage = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/login' element={<Login />} />
            </Routes>
            <MainLib/>

        </div>
    );
};

export default LoginPage;