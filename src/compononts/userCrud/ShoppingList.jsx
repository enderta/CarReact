import React from 'react';
import {Button, Container, Form, Modal} from "react-bootstrap";

const ShoppingList = () => {
    const lists = [
        {
            id: 1,
            name: "Milk",
            quantity: 2
        },
        {
            id: 2,
            name: "Bread",
            quantity: 1
        }];
    const [shoppingList, setShoppingList] = React.useState([]);
    const [filtered, setFiltered] = React.useState(shoppingList);
    const [newItem, setNewItem] = React.useState({});
    const [show, setShow] = React.useState(false);
    const [search, setSearch] = React.useState('');
    const [showEdit, setShowEdit] = React.useState(false);
    const [editItem, setEditItem] = React.useState({});


    React.useEffect(() => {
        setShoppingList(lists);
        setFiltered(lists);
    }, []);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleSearch = (e) => {
        if (e.target.value === '') {
            setFiltered(shoppingList);
        } else {
            setFiltered(shoppingList.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase())));
        }
    }
    const addNewItem = (e) => {
        e.preventDefault();
        setShoppingList([...shoppingList, newItem]);
        setFiltered([...shoppingList, newItem]);
        setNewItem({});
        handleClose();

    }

    return (
        <div>
            <Container>
                <Button variant="primary" onClick={handleShow}>
                    Add New Item
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Item Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Item Name"
                                              onChange={(e) => setNewItem({...newItem, name: e.target.value})}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control type="text" placeholder="Enter Quantity"
                                              onChange={(e) => setNewItem({...newItem, quantity: e.target.value})}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={addNewItem}>
                            Add Item
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Search</Form.Label>
                        <Form.Control type="text" placeholder="Search"
                                      onChange={handleSearch}/>
                    </Form.Group>
                </Form>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Item Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        filtered.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>
                                            <Button variant="danger"
                                                    onClick={
                                                        () => {
                                                            setShoppingList(shoppingList.filter((i) => i.id !== item.id));
                                                            setFiltered(filtered.filter((i) => i.id !== item.id));
                                                        }
                                                    }>Delete</Button>
                                            <Button variant="primary">Edit</Button>
                                        </td>
                                    </tr>
                                )

                            }
                        )
                    }
                    </tbody>
                </table>

            </Container>
        </div>
    );
};

export default ShoppingList;