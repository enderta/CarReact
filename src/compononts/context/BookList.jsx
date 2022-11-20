import React from 'react';
import Book from "./Book";
import {Button, Table} from "react-bootstrap";

const BookList = (props) => {
    console.log(props.books);
    return (
        <div>
            <Table >
                <thead>
                <tr>
                    <th><h4>Action</h4></th>
                    <th><h4>ISBN</h4></th>
                    <th><h4>Title</h4></th>
                    <th><h4>Author</h4></th>
                    <th><h4>Category</h4></th>
                    <th><h4>Year</h4></th>
                    <th><h4>Borrowed By</h4></th>
                </tr>
                </thead>
                <tbody>
                {
                    props.books.map((a)=>{
                        return(
                            <Book book={a} />
                        )
                    }
                    )
                }
                </tbody>
            </Table>


        </div>
    );
};

export default BookList;