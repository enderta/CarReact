import React from 'react';
import DropDown from "./DropDown.jsx";

const MainCity = () => {
    const city=["Harrow","Heatrow","Startford"];
    const category=["pharmcies","doctors","colleges","hospitals"];


    return (
        <div>
            <h1>City Guide</h1>
            <DropDown/>
        </div>
    );
};

export default MainCity;