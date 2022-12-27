import React from 'react';
import {Modal} from "react-bootstrap";

const Cars = (props) => {
    const [show, setShow] = React.useState(false);
    const [car, setCar] = React.useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    React.useEffect(() => {
        fetch(`http://localhost:3001/cars/${props.id}`,{
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
                    <table className="table table-dark">
                        <tbody>
                        <tr>
                            <td>Id</td>
                            <td>{car.id}</td>
                        </tr>
                        <tr>
                            <td>Brand</td>
                            <td>{car.make}</td>
                        </tr>
                        <tr>
                            <td>Model</td>
                            <td>{car.model}</td>
                        </tr>
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