import React from 'react';

const Owner = (props) => {
    return (

            <tr>
                <td>{props.owner.id}</td>
                <td>{props.owner.firstName}</td>
                <td>{props.owner.surname}</td>
                <td>{props.owner.email}</td>
                {/*<td>{props.owner.cars}</td>*/}
            </tr>


    );
};

export default Owner;