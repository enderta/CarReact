import React from 'react';
import {Button} from "react-bootstrap";

const UnReadBooks = (props) => {
    const handleRead = (id) => {
        fetch(`http://localhost:3001/books/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                read: true
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
            })
        window.location.reload();
    }
    return (
        <tr>
            <td>{props.book.title}</td>
            <td>{props.book.author}</td>
            <td>{props.book.publishDate}</td>
            <td>
                <Button variant="outline-success" onClick={() => handleRead(props.book.id)}>Read</Button>
            </td>
        </tr>
    );
};

export default UnReadBooks;