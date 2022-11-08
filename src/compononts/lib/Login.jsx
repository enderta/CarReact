import React from 'react';
import {Button, Image} from "react-bootstrap";
import {Link} from "react-router-dom";

const Login = () => {


    return (
        <div>
            <div>
                {/*<Image src={require('./pexels-ersan-13864601.jpg')} fluid/>*/}
            </div>
            <div className="container" >
                <div className="row">
                    <div className="col-6">
                        <div className="card" style={{border:"1px solid",padding:'10px',margin:"10px",position:'absolute',left:"25%",right:"25%"}}>
                            <div className="card-body" >
                                <h1 className="card-title">Login</h1>
                                <form >
                                    <div className="form-group" >
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                                  aria-describedby="emailHelp"/>
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email
                                            with anyone else.
                                        </small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                                    </div>
                                    <br/>
                                    <Link to='/home'>
                                        <Button className={"btn btn-sm btn-outline btn-danger"}>
                                            Login
                                        </Button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}



export default Login;