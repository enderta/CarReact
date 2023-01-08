import React from 'react';
import DropDown from "./DropDown.jsx";
import ScrollToTop from "../car/ScroolToTop.jsx";

const MainCity = () => {

    return (
        <div>
            <ScrollToTop />
            <h1 style={{textAlign:"center",margin:"10px"}}>City Guide</h1>
            <DropDown/>
        </div>
    );
};

export default MainCity;