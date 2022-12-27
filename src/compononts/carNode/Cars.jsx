import React from 'react';
import {Modal} from "react-bootstrap";

const Cars = (props) => {
    const [show, setShow] = React.useState(false);
    const [car, setCar] = React.useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    React.useEffect(() => {
        fetch(`http://localhost:3001/cars/owner/${props.id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })
            .then(response => response.json())
            .then(data => {
                setCar(data);
            }
            );
    }, []);

    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Car</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className="table table-dark table-striped table-bordered table-hover">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Make</th>
                            <th>Model</th>
                        </tr>
                        </thead>
                        <tbody>
                        {car.map(car => <tr key={car.id}>
                            <td>{car.id}</td>
                            <td>{car.make}</td>
                            <td>{car.model}</td>
                        </tr>)}
                        </tbody>
                    </table>


                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={props.handleClose}>Close</button>
                </Modal.Footer>
            </Modal>



        </div>
    );
};

export default Cars;