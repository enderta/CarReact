import React from 'react';
import {Button, Table} from "react-bootstrap";
import CreateCar from "./CreateCar";
import {Route} from "react-router";
import {Link} from "react-router-dom";

const Cars = () => {
    const [cars, setCars] = React.useState([]);
    const [car, setCar] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch('http://localhost:8081/api/cars')
            .then(response => response.json())
            .then(data => {
                    setCars(data);
                    setLoading(false);
                }
            );

    }, []);
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8081/api/cars/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log(response.status);
            if (response.status === 204) {
                alert("Car deleted successfully");
                setCars(cars.filter(car => car.id !== id));
            }

        } catch (e) {
            console.log(e);
        }
    }


    const handleCreateButton = (e) => {
        e.preventDefault();
    }


    return (
        <div>
            <h1>Cars</h1>

            {loading ? <p>Loading...</p> : (
                <Table variant="dark" striped bordered hover>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Color</th>
                        <th>Price</th>
                        <th>Register Number</th>
                        <th>Owner</th>
                        <th>
                            Delete
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {cars.map(car => (
                        <tr key={car.id}>
                            <td>{car.id}</td>
                            <td>{car.brand}</td>
                            <td>{car.model}</td>
                            <td>{car.year}</td>
                            <td>{car.color}</td>
                            <td>{car.price}</td>
                            <td>{car.registerNumber}</td>
                            <td>
                                <Link to={`/owners/${car.id}`}>{car.owner.firstName} {car.owner.lastName}</Link>
                            </td>
                            <td>
                                <Button variant="danger" onClick={() => handleDelete(car.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            )}

            <div style={{display: "flex", justifyContent: "end", padding: "20px"}}>
                <Button variant="dark" onClick={handleCreateButton}>
                    <Link style={{textDecoration: "none", color: "red", alignSelf: "self-end"}} to={'/cars/create'}>Create
                        a Car</Link>
                </Button>
            </div>


        </div>
    );
};

export default Cars;