import React from 'react';
import {Link} from "react-router-dom";

const Dash = () => {
    const [data, setData] = React.useState({});

    React.useEffect(() => {
            const myHeaders = new Headers();
            myHeaders.append("x-library-token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoiNTgzNiIsImZ1bGxfbmFtZSI6IlRlc3QgTGlicmFyaWFuIDI0IiwiZW1haWwiOiJsaWJyYXJpYW4yNEBsaWJyYXJ5IiwidXNlcl9ncm91cF9pZCI6IjIifSwiaWF0IjoxNjY3Mzg3NjA1LCJleHAiOjE2Njk5Nzk2MDV9.P8Y0XKzwiZjRA8718Q3pGOaTodEI5rGi9KL_SUbhrm0");

            const requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("https://library2.cydeo.com/rest/v1/dashboard_stats", requestOptions)
            .then(response => response.json())
            .then(result => setData(result))
            .catch(error => console.log('error', error));
    }
    , []);
    return (
        <div>
            <section id="dashboard" data-load="dashboard.html" className="spapp-created">
                <div className="container">
                    <br />
                    <div className="row">
                        {/* Column */}
                        <div className="col-md-6 col-lg-4">
                            <div className="card card-body shadow">
                                {/* Row */}
                                <div className="row">
                                    <div className="col text-left align-self-center">
                                        <i
                                            className="fa fa-group fa-4x text-gray-300"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    {/* Column */}
                                    <Link style={{textDecoration: "none", color: "red", alignSelf: "self-end"}} to={'/users'}>
                                    <div className="col p-r-0 align-self-center">

                                        <h2 className="font-light m-b-0" id="user_count">
                                            {data.users}
                                        </h2>
                                        <h6 className="text-muted">Users</h6>
                                    </div>
                                    </Link>

                                    {/* Column */}
                                </div>
                            </div>
                        </div>
                        {/* Column */}
                        <div className="col-md-6 col-lg-4">
                            <div className="card card-body shadow">
                                {/* Row */}
                                <div className="row">
                                    <div className="col text-left align-self-center">
                                        <i
                                            className="fa fa-book fa-4x text-gray-300"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    {/* Column */}
                                    <Link style={{textDecoration: "none", color: "red", alignSelf: "self-end"}} to={'/books'}>
                                    <div className="col p-r-0 align-self-center">
                                        <h2 className="font-light m-b-0" id="book_count">
                                            {data.book_count}
                                        </h2>
                                        <h6 className="text-muted">Books</h6>
                                    </div>
                                    </Link>
                                    {/* Column */}
                                </div>
                            </div>
                        </div>
                        {/* Column */}
                        <div className="col-md-6 col-lg-4">
                            <div className="card card-body shadow">
                                {/* Row */}
                                <div className="row">
                                    <div className="col text-left align-self-center">
                                        <i
                                            className="fa fa-book-reader fa-4x text-gray-300"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    {/* Column */}
                                    <div className="col p-r-0 align-self-center">
                                        <h2 className="font-light m-b-0" id="borrowed_books">
                                            {data.borrowed_books}
                                        </h2>
                                        <h6 className="text-muted">Borrowed Books</h6>
                                    </div>
                                    {/* Column */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Dash;