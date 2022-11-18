import React, {useState} from 'react';
import MainLib from "./compononts/lib/MainLib";
import Car from "./compononts/car/Car";
import MoviesSeries from "./compononts/moives-series/MoviesSeries";
import LoginPage from "./compononts/lib/LoginPage";
import {Button, Modal, Table} from "react-bootstrap";
import Demo from './Demo'
import Department from "./compononts/departments/Department";
import Student from "./compononts/departments/Student";

import Users from "./compononts/context/Users";
import UseContext, {UserContext} from "./compononts/context/UseContext";


const App = () => {
    const users=[
        {id:1,username:'admin',password:'admin'},
        {id:2,username:'user',password:'user'}
    ]

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);







    return (
        <div>
       {/* <Demo d={data}/>*/}


           {/* <MainLib/>*/}
            {/*  <Car/>*/}
          {/*    <MoviesSeries/>*/}
          {/*  <Department/>*/}
          <UseContext>
                <Users/>
            </UseContext>




        </div>
    );
};

export default App;