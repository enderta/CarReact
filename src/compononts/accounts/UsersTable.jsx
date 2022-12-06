import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

const UsersTable = (props) => {
    return (

            <tr>
                <td>
                    <Link to={`/${props.user.id}`} >
                        <Button variant="outline-primary">{props.user.id}</Button>
                    </Link>
                </td>
                <td>{props.user.firstName}</td>
                <td>{props.user.lastName}</td>
                <td>{props.user.email}</td>
                <td>{props.user.zipCode}</td>
                <td>{props.user.city}</td>
            </tr>


    );
};

export default UsersTable;