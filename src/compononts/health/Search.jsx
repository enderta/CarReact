import React from 'react';
import {Form} from "react-bootstrap";

const Search = (props) => {
    return (
        <div>
           <Form bsPrefix={"form-inline"}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Search" onChange={props.search}/>
                </Form.Group>
            </Form>



        </div>
    );
};

export default Search;