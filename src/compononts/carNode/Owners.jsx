import React from 'react';
import Owner from "./Owner";
import {Table} from "react-bootstrap";

const Owners = (props) => {
    const [owners, setOwners] = React.useState([]);

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

    return (
        <div>
            <h1 style={{color:"yellow"}}>Owners</h1>
            <table className="table table-responsive table-dark table-borderless table-striped table-bordered table-hover">
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
    );
};

export default Owners;