import React from 'react';
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

const Users = () => {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3001/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            }
        )

    }, []);
    const handleDelete = (id) => {
        fetch(`http://localhost:3001/users/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                setUsers(users.filter(user => user.id !== id));
            })
        window.location.reload();
    }
    return (
        <div>
            <h1>Users</h1>
            <Button className={'btn-danger'} variant="danger" as={Link} to={`/add`}>
                Add User
            </Button>
            <Table className={'table'} striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Title</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {
                    users.map((user) => (
                        <tr>
                            <td>
                                {user.id}
                            </td>
                            <td>
                                {user.name}
                            </td>
                            <td>
                                {user.surname}
                            </td>
                            <td>
                                {user.title}
                            </td>
                            <td>
                                <Button className={'btn-danger'} variant="danger" onClick={handleDelete} >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>


        </div>
    );
};

export default Users;