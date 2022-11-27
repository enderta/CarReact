import React from 'react';
import {Form} from "react-bootstrap";
import {PatientContext} from "./Patients";

const Search = () => {
    const search= React.useContext(PatientContext);
    console.log(search);
    return (
        <div>
            <Form.Control type="text" placeholder="Search" onChange={search.handleSearch}/>

        </div>
    );
};

export default Search;