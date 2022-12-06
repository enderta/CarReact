import React from 'react';
import {useParams} from "react-router";
import demo from '../../demo.json'
const UserInfo = () => {
    let usid=useParams()

    const user=demo.filter((user)=>user.id.toString()===usid.id)

    return (
        <div>
            <h1>{user[0].firstName}</h1>
            <h1>{user[0].lastName}</h1>
            <h1>{user[0].email}</h1>
            <h1>{user[0].zipCode}</h1>
            <h1>{user[0].city}</h1>

        </div>
    );
};

export default UserInfo;