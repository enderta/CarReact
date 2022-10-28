import React from 'react';
import {Route, Routes} from "react-router";
import Cars from "./Cars";
import CreateCar from "./CreateCar";
import CreateOwner from "./CreateOwner";
import NavBar from "./NavBar";
import Owner from "./Owner";
import OwnerCar from "./OwnerCar";



const Car = () => {
    return (
        <div>
            <ScrollToTop />
            <NavBar/>

            <Routes>
                <Route path="/cars" element={<Cars/>}/>
                <Route path='/cars/create' element={<CreateCar/>}/>
                <Route path='/owners' element={<Owner/>}/>
                <Route path='/owners/createOwner' element={<CreateOwner/>}/>
                <Route path='/owners/:id' element={<OwnerCar/>}/>
            </Routes>
        </div>
    );
};

export default Car;