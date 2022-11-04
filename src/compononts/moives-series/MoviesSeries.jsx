import React from 'react';
import ScrollToTop from "./ScrollToTop";
import {Route, Routes} from "react-router";
import HomeNavi from "./HomeNavi";
import Series from "./Series";
import Seasons from "./Seasons";
import Movies from "./Movies";

const MoviesSeries = () => {
    return (<div>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<HomeNavi/>}/>

            <Route path="/series" element={<Series/>}>
                

            </Route>
            <Route path="/series/:id" element={<Seasons/>}/>
            <Route path='/movies' element={<Movies/>}/>
        </Routes>



</div>)

};

export default MoviesSeries;