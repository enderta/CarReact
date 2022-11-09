import React from 'react';
import {Link} from "react-router-dom";
import Nav from "./Nav";


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
            <Nav/>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                    <br/>
                        <div className="card" style={{margin:"10px"}}>
                           <Link to={"/users"} className="btn btn">
                               <div className="card-body">
                                   <h5 className="card-title">Total Users</h5>
                                   <p className="card-text">{data.users}</p>
                               </div>
                           </Link>
                        </div>
                        <div className="card"style={{margin:"10px"}}>
                            <Link to={"/books"} className="btn btn">
                                <div className="card-body">
                                    <h5 className="card-title">Total Books</h5>
                                    <p className="card-text">{data.book_count}</p>
                                </div>
                            </Link>
                        </div>
                        <div className="card" style={{margin:"10px"}}>
                           <Link to={"/borrowedBooks"} className="btn btn">
                                 <div className="card-body">
                                        <h5 className="card-title">Total Borrowed Books</h5>
                                        <p className="card-text">{data.borrowed_books}</p>
                                 </div>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Dash;