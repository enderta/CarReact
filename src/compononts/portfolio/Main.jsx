import React from 'react';
import Nav from "./Nav";
import {Route, Routes} from "react-router";
import Contact from "./Contact";
import Home from "./Home";
import Portfolio from "./Portfolio";
import About from "./About";
import ContactId from "./ContactId";

const Main = () => {
    return (
        <div>
           <Nav/>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path='/contact/:id' element={<ContactId/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>


        </div>
    );
};

export default Main;