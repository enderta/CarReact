import React from 'react';
import {Button, Modal} from "react-bootstrap";
import EditBook from "./EditBook";

const Book = (props) => {
    console.log(props.book);
    const [show, setShow] = React.useState(false);
    return (
        <>
            <tr>
                <td>
                    <Button variant="primary" onClick={() => setShow(true)}>
                        Edit
                    </Button></td>
                    <td>{props.book.isbn}</td>
                    <td>{props.book.name}</td>
                    <td>{props.book.author}</td>
                    <td>{props.book.category}</td>
                    <td>{props.book.year}</td>
                    <td>{props.book.full_name}</td>

            </tr>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditBook book={props.book} />
                </Modal.Body>
            </Modal>

        </>
    );
};

export default Book;