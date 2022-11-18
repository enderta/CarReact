import React, {useContext} from 'react';
import {Modal, Table} from "react-bootstrap";

import EditUser from "./EditUser";
import {UserContext} from "./UseContext";
import User from "./User";



const Users = () => {

    const users= useContext(UserContext);

    console.log(users);


    return (
        <div>
            <div className="table-scrollable">
                <Table >
                    <thead>
                    <tr role="row">
                        <th><h4>
                            Edit
                        </h4></th>
                        <th><h4>
                            ID
                        </h4></th>
                        <th><h4>
                            Full Name
                        </h4></th>
                        <th><h4>
                            Email
                        </h4></th>
                            <th><h4>
                                User Group
                            </h4></th>
                        <th><h4>
                            Status
                        </h4></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.users.map((a)=>{
                            return(
                               <User user={a} />
                            )
                        }
                        )
                    }

                    </tbody>
                </Table>
            </div>



        </div>
    );
};

export default Users;