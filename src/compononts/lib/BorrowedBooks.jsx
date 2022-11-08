import React from 'react';
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";

const BorrowedBooks = () => {

    const [borrowedBooks, setBorrowedBooks] = React.useState([]);
    const [title, setTitle] = React.useState('');
    const [id, setId] = React.useState('');
    const [userId, setUserId] = React.useState(1);
    const [search, setSearch] = React.useState('');
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

                setBorrowedBooks(data.filter((book) => book.disabled === "0"));
                setFilter(data.filter((book) => book.disabled === "0"));


            });
    }, []);
const handleSearch = (e) => {
   setSearch(e.target.value);
    setFilter(borrowedBooks.filter((book) => book.name.toLowerCase().includes(search.toLowerCase())));


}
    console.log(filter)

    return (
        <div>
         <div className='container'>
            <div className='row'>
                <h4>Borrow Book</h4>
                <br/>
                <div className='col-md-12'>
                    <div className='search'>
                        <form onSubmit={handleSearch}>
                            <input type='text' placeholder='Search' value={search} onChange={handleSearch}/>
                        </form>
                    </div>
                    <br/>
                    <Table bordered>
                        <thead>
                        <tr>
                            <th><h4>ID</h4></th>
                            <th><h4>Title</h4></th>
                            <th><h4>Borrow</h4></th>
                        </tr>
                        </thead>
                        <tbody>
                        {filter.map((book) => (
                            <tr >
                                <td>{book.id}</td>
                                <td>{book.name}</td>
                                <td>
                                    <Link to={`/borrow/${book.id}`}>
                                        <button className='btn btn-primary'>Borrow</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
        </div>

    );
};

export default BorrowedBooks;