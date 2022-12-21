import React, {useEffect, useState} from 'react';
/*import MainLib from "./compononts/lib/MainLib";
import Car from "./compononts/car/Car";
import MoviesSeries from "./compononts/moives-series/MoviesSeries";
import LoginPage from "./compononts/lib/LoginPage";
import {Button, Card, Modal, Table} from "react-bootstrap";

import Department from "./compononts/departments/Department";
import Student from "./compononts/departments/Student";

import Users from "./compononts/context/Users";
import UseContext, {UserContext} from "./compononts/context/UseContext";
import Book from "./compononts/context/Book";
import BookList from "./compononts/context/BookList";
import Books from "./compononts/context/Books";
import Tefeul from "./compononts/tef/Tefeul";
import RandomNum from "./compononts/tef/RandomNum";
import RandomImg from "./compononts/tef/RandomImg";*/
import Nav from "./compononts/portfolio/Nav";
import Patients from "./compononts/health/Patients";
import Books from "./compononts/lib/Books";
import Main from "./compononts/portfolio/Main";
import RandomNameGetter from "./compononts/RandomNameGetter";
import Baby from "./Baby";
import Flags from "./compononts/countries/Flags";
import Users from "./compononts/userCrud/Users";
import Rout from "./compononts/accounts/Rout";
import MainCrud from "./compononts/userCrud/MainCrud";
import Crud2 from "./compononts/crud2/Crud2";
import Notes from "./compononts/notes/Notes";
import JobTrc from "./compononts/jobAppTrckr/JobTrc";
import MoviesSeries from "./compononts/moives-series/MoviesSeries";
import MainLib from "./compononts/lib/MainLib";


const App = () => {


    return (
        <div>
            {/* <Demo d={data}/>*/}


               <MainLib/>
            {/*    <Car/>*/}
            {/*        <MoviesSeries/>*/}
            {/*  <Department/>*/}
            {/*  <UseContext>
                <Users/>
            </UseContext>*/}
            {/*   <Books/>*/}
            {/*    <Tefeul/>*/}
            {/*   <RandomNum/>*/}
            {/*    <RandomImg/>*/}


            {/* <img src={x.map((item)=>item.img_src)} />*/}
        {/*    <Patients/>*/}
            {/*      <Main/>*/}
            {/*  <RandomNameGetter/>*/}
            {/*<Baby/>*/}
        {/*     <Flags/>*/}
          {/*  <Rout/>*/}
        {/*  <MainCrud/>*/}
       {/*     <Crud2/>*/}
      {/*      <Notes/>*/}
        {/*    <JobTrc/>*/}
        </div>
    );
};

export default App;