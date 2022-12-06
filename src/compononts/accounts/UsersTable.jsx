import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

const UsersTable = (props) => {
    return (

        <tr>
            <td>
                <Button className={'btn-danger'} variant="danger" as={Link} to={`/${props.user.id}`}>
                    {props.user.id}
                </Button>
            </td>
            <td>
                <Link style={{textDecoration:'none'}} to={`/${props.user.id}`}>
                    {props.user.firstName}
                </Link>

            </td>
            <td>{props.user.lastName}</td>
            <td>{props.user.email}</td>
            <td>{props.user.zipCode}</td>
            <td>{props.user.city}</td>
        </tr>


    );
};

export default UsersTable;