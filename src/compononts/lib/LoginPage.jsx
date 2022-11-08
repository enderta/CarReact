import React from 'react';
import {Route, Routes} from "react-router";
import Login from "./Login";
import MainLib from "./MainLib";

const LoginPage = () => {
    return (
        <div>
            <Login/>
            <MainLib/>



        </div>
    );
};

export default LoginPage;