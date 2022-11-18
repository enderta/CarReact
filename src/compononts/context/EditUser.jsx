import React, {useContext} from 'react';
import {UserContext} from "./UseContext";

const EditUser = ({user}) => {


    return (
        <div>
            {user.id}

        </div>
    );
};

export default EditUser;