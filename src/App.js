import React from 'react';
import MainLib from "./compononts/lib/MainLib";
import Car from "./compononts/car/Car";
import MoviesSeries from "./compononts/moives-series/MoviesSeries";
import LoginPage from "./compononts/lib/LoginPage";
import {Button} from "react-bootstrap";
import Demo from './Demo'




const App = () => {
   const data=[{"name":"ender","topic":"eng"},{"name":"ali","topic":"math"}]



    return (
        <div>
       {/* <Demo d={data}/>*/}


           {/* <MainLib/>*/}
            {/*  <Car/>*/}
              <MoviesSeries/>
        </div>
    );
};

export default App;