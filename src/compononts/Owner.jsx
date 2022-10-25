import React from 'react';
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";

const Owner = () => {
    const [owners, setOwners] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch('http://localhost:8081/api/owners')
            .then(response => response.json())
            .then(data => {
                setOwners(data);
                setLoading(false);
            }
            );

    }
    , []);
    const handleDelete = (id) => {
        fetch(`http://localhost:8081/api/owners/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                setOwners(owners.filter(owner => owner.id !== id));
            });

    }
    const handleCreateButton = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {owners.map(owner => (
                        <tr key={owner.ownerid}>
                            <td>{owner.ownerid}</td>
                            <td>{owner.firstname}</td>
                            <td>{owner.lastname}</td>
                            <td>
                                <button onClick={() => handleDelete(owner.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <button onClick={handleCreateButton}>
                <Link to={'/owners/create'}>Create</Link>
            </button>

        </div>
    );
};

export default Owner;