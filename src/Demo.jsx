import React, {useContext} from 'react';
import {Table} from "react-bootstrap";

const Demo = () => {
const d=useContext(d);
    return (
        <div>
          <Table  striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{d.name}</td>
                    <td>{d.age}</td>
                    <td>{d.address.city}</td>
                </tr>
                </tbody>
            </Table>

        </div>
    );
};

export default Demo;