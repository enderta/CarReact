import React from 'react';
import Owner from "./Owner";
import {Modal, Table} from "react-bootstrap";
import CreateOwner from "./CreateOwner";

const Owners = (props) => {
    const [owners, setOwners] = React.useState([]);
    const [show, setShow] = React.useState(false);


    React.useEffect(() => {
        fetch('http://localhost:3001/owners',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                }

            })
            .then(response => response.json())
            .then(data => {
                    setOwners(data);
                }
            );
    }, []);
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = 'http://localhost:3000/';
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <h1 style={{color: "yellow", textAlign: "center"}}>Owners</h1>
            <div>
                  <span>

                <button onClick={handleLogout} className="btn btn-outline-info"
                        style={{float: "right", margin: "10px"}}>Logout</button>
                        <button className="btn btn-outline-info" onClick={handleShow}
                                style={{float: "right", margin: "10px"}}>Create Owner</button>

                          <CreateOwner owners={owners} setOwners={setOwners} show={show} handleClose={handleClose}/>


            </span>
            </div>


            <div className="container">
                <table
                    className="table table-responsive table-dark table-borderless table-striped table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Cars</th>
                    </tr>
                    </thead>
                    <tbody>
                    {owners.map(owner => <Owner key={owner.id} owner={owner}/>)}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Owners;