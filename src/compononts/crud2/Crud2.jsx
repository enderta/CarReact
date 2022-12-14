import React from 'react';
import {Button, Modal, Table} from "react-bootstrap";
import UserModal from "./UserModal";
import Crud2Table from "./Crud2Table";
import ModalAddUser from "./ModalAddUser";

const Crud2 = () => {
    const [users, setUsers] = React.useState([]);
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        fetch('http://localhost:3001/users')
            .then(res => res.json())
            .then(data => {
                    setUsers(data);
                }
            )
    },[]);


    return (
        <div>
            <h1>Crud2</h1>
            <Button variant="success" onClick={() => setShow(true)}>
                Add User
            </Button>
            <ModalAddUser show={show} setShow={setShow}/>
            <Table className={'table'} striped bordered hover>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Title</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((user) => (
                      <Crud2Table key={user.id} user={user} setShow={setShow}/>
                    ))


                }
                </tbody>
            </Table>

        </div>
    );
};

export default Crud2;