import React from 'react';
import DropDown from "./DropDown.jsx";

const MainCity = () => {
    const city=["Harrow","Heatrow","Startford"];
    const category=["pharmcies","doctors","colleges","hospitals"];


    return (
        <div>
            <h1 style={{textAlign:"center",margin:"10px"}}>City Guide</h1>
            <DropDown/>
        </div>
    );
};

export default MainCity;