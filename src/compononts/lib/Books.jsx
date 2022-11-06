import React from 'react';
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

const Books = () => {
    const [books, setBooks] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [search, setSearch] = React.useState("");
    const [filteredBooks, setFilteredBooks] = React.useState([]);
    const [isbn, setIsbn] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [author, setAuthor] = React.useState("");
    const [catagory, setCatagory] = React.useState("");
    const [year, setYear] = React.useState("");
    const [borrowed, setBorrowed] = React.useState("");
    const [count, setCount] = React.useState(50);

    React.useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("x-library-token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoiNTgzNiIsImZ1bGxfbmFtZSI6IlRlc3QgTGlicmFyaWFuIDI0IiwiZW1haWwiOiJsaWJyYXJpYW4yNEBsaWJyYXJ5IiwidXNlcl9ncm91cF9pZCI6IjIifSwiaWF0IjoxNjY3Mzg3NjA1LCJleHAiOjE2Njk5Nzk2MDV9.P8Y0XKzwiZjRA8718Q3pGOaTodEI5rGi9KL_SUbhrm0");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://library2.cydeo.com/rest/v1/get_books?book_categories=null&draw=1&columns%5B0%5D%5Bdata%5D=actions&columns%5B0%5D%5Bname%5D=actions&columns%5B0%5D%5Bsearchable%5D=true&columns%5B0%5D%5Borderable%5D=false&columns%5B0%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B0%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B1%5D%5Bdata%5D=isbn&columns%5B1%5D%5Bname%5D=isbn&columns%5B1%5D%5Bsearchable%5D=true&columns%5B1%5D%5Borderable%5D=true&columns%5B1%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B1%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B2%5D%5Bdata%5D=name&columns%5B2%5D%5Bname%5D=B.name&columns%5B2%5D%5Bsearchable%5D=true&columns%5B2%5D%5Borderable%5D=true&columns%5B2%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B2%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B3%5D%5Bdata%5D=author&columns%5B3%5D%5Bname%5D=B.author&columns%5B3%5D%5Bsearchable%5D=true&columns%5B3%5D%5Borderable%5D=true&columns%5B3%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B3%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B4%5D%5Bdata%5D=category&columns%5B4%5D%5Bname%5D=BC.name&columns%5B4%5D%5Bsearchable%5D=true&columns%5B4%5D%5Borderable%5D=true&columns%5B4%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B4%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B5%5D%5Bdata%5D=year&columns%5B5%5D%5Bname%5D=B.year&columns%5B5%5D%5Bsearchable%5D=true&columns%5B5%5D%5Borderable%5D=true&columns%5B5%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B5%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B6%5D%5Bdata%5D=full_name&columns%5B6%5D%5Bname%5D=U.full_name&columns%5B6%5D%5Bsearchable%5D=true&columns%5B6%5D%5Borderable%5D=true&columns%5B6%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B6%5D%5Bsearch%5D%5Bregex%5D=false&order%5B0%5D%5Bcolumn%5D=1&order%5B0%5D%5Bdir%5D=desc&start=0&length=${count}&search%5Bvalue%5D=&search%5Bregex%5D=false&_=1667734188443`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setBooks(result.data);
              setFilteredBooks(result.data);
            }
            )
            .catch(error => console.log('error', error));



    }, [count]);
    const handleSearch = (event) => {
        setSearch(event.target.value);
        setFilteredBooks(
            books.filter((book) => {
                return book.name.toLowerCase().includes(event.target.value.toLowerCase())||book.author.toLowerCase().includes(event.target.value.toLowerCase())||book.category.toLowerCase().includes(event.target.value.toLowerCase());
            })
        );
    }

   const handleCount = (event) => {
        setCount(event.target.value);

   }

    return (
        <div>
            <div>
                <br/>
                <section className="container">
                    <div className="row">
                        <div className="col-md-12">

     <span style={{float: "right"}}>
       <Link className={"btn btn"} to={"/books/add"}><h6>Add Book</h6></Link>
      </span>
                            <h3>Book Management</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label">Book Categories</label>
                                        <select
                                            id="user_groups"
                                            className="form-control select2"
                                            /*value={userGroup}
                                            onChange={handleUserGroup}*/
                                        >
                                            <option value="null" selected="selected">
                                                ALL
                                            </option>
                                            <option value={2}>Librarian</option>
                                            <option value={3}>Students</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                            <div id="tbl_users_wrapper" className="dataTables_wrapper no-footer">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="dataTables_length" id="tbl_users_length">
                                            <label>
                                                <select
                                                    name="tbl_users_length"
                                                    aria-controls="tbl_users"
                                                    className="form-control input-sm input-xsmall input-inline"
                                                    value={count}
                                                  onChange={handleCount}
                                                >
                                                    <option value={5}>5</option>
                                                    <option value={10}>10</option>
                                                    <option value={15}>15</option>
                                                    <option value={50}>50</option>
                                                </select>
                                                Records
                                            </label>
                                        </div>
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
                                            <tr role="row">
                                                <th><h3>Action</h3></th>
                                                <th><h3>ISBN</h3></th>
                                                <th><h3>Title</h3></th>
                                                <th><h3>Author</h3></th>
                                                <th><h3>Category</h3></th>
                                                <th><h3>Year</h3></th>
                                                <th><h3>Borrowed By</h3></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                filteredBooks.map((book, index) => {
                                                    return (
                                                        <tr role="row" className="odd">
                                                            <td>
                                                                <Link to={`/books/${book.id}`}>
                                                                    <Button className={"btn btn-sm btn-outline btn-danger"}>
                                                                        Edit
                                                                    </Button>
                                                                </Link>
                                                            </td>
                                                            <td className="sorting_1"><h6>{book.id}</h6></td>
                                                            <td><h6>{book.name}</h6></td>
                                                            <td><h6>{book.author}</h6></td>
                                                            <td><h6>{book.category}</h6></td>
                                                            <td><h6>{book.year}</h6></td>
                                                            <td><h6>{book.full_name}</h6></td>

                                                        </tr>
                                                    )

                                                })

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
};

export default Books;