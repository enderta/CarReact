import React from 'react';
import {Table} from "react-bootstrap";

const BorrowedBooks = () => {

    const [borrowedBooks, setBorrowedBooks] = React.useState([]);
    const [title, setTitle] = React.useState('');
    const [id, setId] = React.useState('');
    const [userId, setUserId] = React.useState(1);
    const [filter, setFilter] = React.useState([]);

    React.useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("x-library-token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoiNTgzNiIsImZ1bGxfbmFtZSI6IlRlc3QgTGlicmFyaWFuIDI0IiwiZW1haWwiOiJsaWJyYXJpYW4yNEBsaWJyYXJ5IiwidXNlcl9ncm91cF9pZCI6IjIifSwiaWF0IjoxNjY3Mzg3NjA1LCJleHAiOjE2Njk5Nzk2MDV9.P8Y0XKzwiZjRA8718Q3pGOaTodEI5rGi9KL_SUbhrm0");
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch("https://library2.cydeo.com/rest/v1/get_book_list_for_borrowing", requestOptions)
            .then(response => response.json())
            .then(data => {

                setBorrowedBooks(data.filter((book) => book.disabled==="0"));



            });
    }, []);



    return (
        <div>
            <div className="table-scrollable">
                <h4>Books to Borrow</h4>
                <br/>
                <div className="table-scrollable">
                    <Table className="table table-striped table-bordered table-hover table-checkable order-column dataTable no-footer">
                    <thead>
                    <tr role="row">
                        <th><h4>Id</h4></th>
                        <th><h4>Title</h4></th>
                        <th><h4>Borrow</h4></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        borrowedBooks.map((book) => {
                            return (
                                <tr key={book.id}>
                                    <td><h4>{book.id}</h4></td>
                                    <td><h4>{book.name}</h4></td>
                                    <td>
                                        <button className="btn btn-primary"  onClick={
                                            (e)=>{
                                                e.preventDefault();
                                                setId(book.id);
                                                const myHeaders = new Headers();
                                                myHeaders.append("Content-Type", "application/json");
                                                myHeaders.append("x-library-token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoiNTgzNiIsImZ1bGxfbmFtZSI6IlRlc3QgTGlicmFyaWFuIDI0IiwiZW1haWwiOiJsaWJyYXJpYW4yNEBsaWJyYXJ5IiwidXNlcl9ncm91cF9pZCI6IjIifSwiaWF0IjoxNjY3Mzg3NjA1LCJleHAiOjE2Njk5Nzk2MDV9.P8Y0XKzwiZjRA8718Q3pGOaTodEI5rGi9KL_SUbhrm0");
                                                const raw = JSON.stringify({"book_id":id,"user_id":userId});
                                                const requestOptions = {
                                                    method: 'POST',
                                                    headers: myHeaders,
                                                    body: raw,
                                                    redirect: 'follow'
                                                };
                                                fetch("https://library2.cydeo.com/rest/v1/book_borrow", requestOptions)
                                                    .then(response => response.json())
                                                    .then(data => {
                                                        console.log(data);
                                                    }
                                                    )
                                                    .catch(error => console.log('error', error));

                                                window.location.reload();
                                            }

                                        }>Borrow</button>
                                    </td>
                                </tr>
                            )
                        }

                        )

                        }
                    </tbody>
                </Table>
            </div>
        </div>
        </div>
    );
};

export default BorrowedBooks;