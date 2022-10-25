import React from 'react';
import {Route, Routes} from "react-router";
import Cars from "./Cars";
import CreateCar from "./CreateCar";
import CreateUser from "./CreateUser";
import NavBar from "./NavBar";
import Owner from "./Owner";



const Car = () => {
    return (
        <div>
            <NavBar/>

            <Routes>
                <Route path="/cars" element={<Cars/>}>

                </Route>
                <Route path='/cars/create' element={<CreateCar/>}/>
              {/*  <Route path='/owners' element={<Owner/>}/>
                <Route path='/owners/create' element={<CreateUser/>}/>*/}
            </Routes>
        </div>
    );
};

export default Car;