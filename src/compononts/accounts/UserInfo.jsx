import React from 'react';
import {useParams} from "react-router";

const UserInfo = () => {
    let usid=useParams()
    return (
        <div>
            user id: {usid.id}
        </div>
    );
};

export default UserInfo;