import React from 'react';
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import Nav from "./Nav";

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
    setFilter(borrowedBooks.filter((book) => book.name.toLowerCase().includes(search.toLowerCase())).sort((a, b) => a.name.localeCompare(b.name)));


}
    console.log(filter)

    return (
        <div>
            <Nav/>
            <div>
                <br/>
                <section className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Borrow Book</h3>

                            <div id="tbl_users_wrapper" className="dataTables_wrapper no-footer">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div
                                            id="tbl_users_filter"
                                            className="dataTables_filter"
                                            style={{textAlign: "right"}}
                                        >
                                            <label>
                                                Search:
                                                <input
                                                    type="search"
                                                    className="form-control input-sm input-small input-inline"
                                                    placeholder=""
                                                    aria-controls="tbl_users"
                                                    value={search}
                                                    onChange={handleSearch}
                                                />
                                            </label>
                                        </div>
                                    </div>

                                    <div className="table-scrollable">
                                        <br/>
                                        <Table className="table table-striped table-bordered table-hover table-checkable order-column dataTable no-footer">
                                            <thead>
                                            <tr>
                                                <th><h4>ID</h4></th>
                                                <th><h4>Book Name</h4></th>
                                                <th><h4>Borrow</h4></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                filter.map((item) => {
                                                        return <tr>
                                                            <td><h5>{item.id}</h5></td>
                                                            <td><h5>{item.name}</h5></td>
                                                            <td><Link className={"btn btn"} to={`/borrowedBooks/${item.id}`}><h5>Borrow</h5></Link></td>
                                                        </tr>
                                                    }
                                                )
                                                }


                                            </tbody>
                                        </Table>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>

            </div>
        </div>


    );
}

export default BorrowedBooks;