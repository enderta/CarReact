import React from 'react';
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import Nav from "./Nav";

const Books = () => {
    const [books, setBooks] = React.useState([]);
    const [search, setSearch] = React.useState("");
    const [filteredBooks, setFilteredBooks] = React.useState([]);
    const [count, setCount] = React.useState(5);
    const [catagory, setCatagory] = React.useState([]);


    React.useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("x-library-token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoiNTgxMyIsImZ1bGxfbmFtZSI6IlRlc3QgTGlicmFyaWFuIDEiLCJlbWFpbCI6ImxpYnJhcmlhbjFAbGlicmFyeSIsInVzZXJfZ3JvdXBfaWQiOiIyIn0sImlhdCI6MTY3MTY0MTAwNywiZXhwIjoxNjc0MjMzMDA3fQ.lr_dknFKJhfh4X7DFtciNQbVSlQ5CvoJsqn9rpBx36s");
        const requestOptions = {
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
                return book.name.toLowerCase().includes(event.target.value.toLowerCase()) || book.author.toLowerCase().includes(event.target.value.toLowerCase()) || book.category.toLowerCase().includes(event.target.value.toLowerCase());
            })
        );
    }
    const handleCount = (event) => {
        setCount(event.target.value);
    }
    let cats = ['Fairy Tale', 'Action and Adventure', 'Classic', 'Anthology', 'Short Story', 'Drama', 'Comic and Graphic Novel', 'Crime and Detective', 'Romance', 'Fantasy', 'Fan-Fiction', 'Science Fiction', 'Historical Fiction', 'Memoir', 'Humor', 'Poetry', 'Fable', 'Essay', 'Horror', 'Biography/Autobiography'];
    console.log(cats);
    const handleCatagory = (event) => {
        setCatagory(event.target.value);
        if (event.target.value === "All") {
            setFilteredBooks(books);
        } else {
            setFilteredBooks(
                books.filter((book) => {
                    return book.category === event.target.value;
                })
            );
        }
    }
    const tableSort=(event)=>{
        const sortField=event.target.dataset.sort;
        const cloneData=filteredBooks.concat();
        const sortType=event.target.dataset.sortType;
        const order=sortType==='asc'?1:-1;
        const sortData=cloneData.sort((a,b)=>{
            return a[sortField]>b[sortField]?order:-order;
        });
        setFilteredBooks(sortData);
        event.target.dataset.sortType=sortType==='asc'?'desc':'asc';
    }
    return (
        <div>
            <Nav/>
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
                                        <select className="form-control" onChange={handleCatagory}>
                                            <option value="All">All</option>
                                            {
                                                cats.map((item) => {
                                                        return <option value={item}><h6>
                                                            {item}
                                                        </h6></option>
                                                    }
                                                )

                                            }
                                        </select>
                                    </div>
                                    <br/>
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
                                        <Table
                                            className="table table-striped table-bordered table-hover table-checkable order-column dataTable no-footer">
                                            <thead  >
                                            <tr role="row" onClick={tableSort}>
                                                <th ><h4>Action</h4></th>
                                                <th><h4>ISBN</h4></th>
                                                <th ><h4>Title</h4></th>
                                                <th><h4>Author</h4></th>
                                                <th><h4>Category</h4></th>
                                                <th><h4>Year</h4></th>
                                                <th><h4>Borrowed By</h4></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                filteredBooks.map((book, index) => {
                                                    return (
                                                        <tr role="row" className="odd">
                                                            <td>
                                                                <Link to={`/books/${book.id}`}>
                                                                    <Button
                                                                        className={"btn btn-sm btn-outline btn-danger"}>
                                                                        Edit Book
                                                                    </Button>
                                                                </Link>
                                                            </td>
                                                            <td><h6>{book.isbn}</h6></td>
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