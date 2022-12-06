import React from 'react';
import UsersTable from "./UsersTable";
import {Table} from "react-bootstrap";
import demo from '../../demo.json'

const Users = () => {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        setUsers(demo);
    }, []);
    console.log(users);


    return (
        <div>
            <h1>Users</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Zip Code</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                {
                    users.map((user) => (
                       <UsersTable key={user.id} user={user}/>
                    ))

                }
                </tbody>
            </Table>



        </div>
    );
};

export default Users;