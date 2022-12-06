import React from 'react';

const UsersTable = (props) => {
    return (

            <tr>
                <td>{props.user.id}</td>
                <td>{props.user.firstName}</td>
                <td>{props.user.lastName}</td>
                <td>{props.user.email}</td>
                <td>{props.user.zipCode}</td>
                <td>{props.user.city}</td>
            </tr>


    );
};

export default UsersTable;