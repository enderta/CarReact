import React from 'react';
import {Button, Table} from "react-bootstrap";
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

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8081/api/owners/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',}
            });
            console.log(response.status);
            if (response.status === 204) {
                alert("Owner deleted successfully");
                setOwners(owners.filter(owner => owner.id !== id));
            }

        }
        catch (e) {
            console.log(e);
        }
    }

    const handleCreateButton = (e) => {
        e.preventDefault();
    }
    console.log(owners[0]);

    return (
        <div>
            <h1>Owners</h1>
            <Table variant={"dark"} striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Car</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {owners.map(owner => (
                        <tr key={owner.id}>
                            <td>{owner.ownerId}</td>
                            <td>{owner.firstName}</td>
                            <td>{owner.lastName}</td>
                            <td>{owner.address}</td>
                            <td>{owner.city}</td>
                            <td><Link to={`/owners/${owner.cars[0].id}`}>Cars</Link></td>

                            <td>
                                <Button variant="danger" onClick={() => handleDelete(owner.ownerId)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div style={{display:"flex",justifyContent:"end",padding:"20px"}}>
                <Button variant="dark" onClick={handleCreateButton}>
                    <Link style={{textDecoration:"none",color:"red",alignSelf:"self-end"}} to={'/owners/createOwner'}>Create Owner</Link>
                </Button>
            </div>




        </div>
    );
};

export default Owner;