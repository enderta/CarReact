import React from 'react';
import {Button, Table} from "react-bootstrap";
import CreateCar from "./CreateCar";
import {Route} from "react-router";
import {Link} from "react-router-dom";

const Cars = () => {
    const [cars, setCars] = React.useState([]);
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
    const handleDelete = (id) => {
        fetch(`http://localhost:8081/api/cars/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                setCars(cars.filter(car => car.id !== id));
            });

    }
    const handleCreateButton = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h1>Cars</h1>
            <button onClick={handleCreateButton}>
                <Link to='/cars/create'>Create</Link>
            </button>
            {loading ? <p>Loading...</p> : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Year</th>
                            <th>Color</th>
                            <th>Price</th>

                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.sort((a,b)=>(a.id-b.id)).map(car => (
                            <tr key={car.id}>
                                <td>{car.id}</td>
                                <td>{car.brand}</td>
                                <td>{car.model}</td>
                                <td>{car.year}</td>
                                <td>{car.color}</td>
                                <td>{car.price}</td>

                                <td>
                                    <Button variant="danger" onClick={() => handleDelete(car.id)}>Delete</Button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}




        </div>
    );
};

export default Cars;