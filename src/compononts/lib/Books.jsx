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
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {

    }, []);

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
                                                Show{" "}
                                                <select
                                                    name="tbl_users_length"
                                                    aria-controls="tbl_users"
                                                    className="form-control input-sm input-xsmall input-inline"
                                                    value={count}
                                                  /*  onChange={handleCount}*/
                                                >
                                                    <option value={5}>5</option>
                                                    <option value={10}>10</option>
                                                    <option value={15}>15</option>
                                                    <option value={50}>50</option>
                                                </select>{" "}
                                                records
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
                                                   /* onChange={handleSearch}*/
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="table-scrollable">
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