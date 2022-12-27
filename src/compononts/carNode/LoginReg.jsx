import React from 'react';
import '../car/car.css';
import {Form, FormGroup} from "react-bootstrap";
import Cars from "./Cars";
import Owners from "./Owners";
const LoginReg = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    let token='';
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
   const login= (e) => {
        e.preventDefault()
    const user = {
        email,
        password
    }
    fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(res => res.json())
        .then(data => {
            if(data.token){
               localStorage.setItem('token', data.token);
                window.location.href = 'http://localhost:3000/home';
            }
            else {
                alert(data.message);

            }
        }
        )
        .catch(err => console.log(err))

    }


   const register = (e) => {
        e.preventDefault()
    const user = {
        email,
        password
    }
    fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(res => res.json())
        .then(data => {
            if(data.message==='User created'){

                window.location.href = 'http://localhost:3000/login';
            }
            else {
                alert(data.message);

            }
        }
        )
        .catch(err => console.log(err))

    }



    return (
        <div>
            <div>
                <video autoPlay loop muted>
                    <source
                        src={require('../car/pexels-anthony-shkraba-8064146.mp4')}
                        type="video/mp4"
                    />

                </video>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="card" style={{

                                padding: '10px',
                                margin: "10px",
                                position: 'absolute',
                                top: '25%',
                                left: "25%",
                                right: "25%",
                                background: "none",
                                border: "none"
                            }}>
                                <div className="card-body">

                                    <FormGroup>
                                        <Form>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1" style={{color:"#f3ce13"}}>Email </label>
                                                <input  type="email" className="form-control" id="exampleInputEmail1"
                                                       aria-describedby="emailHelp" onChange={handleEmail}/>
                                            </div>
                                            <div className="form-group">
                                                <label style={{color:"#f3ce13"}} htmlFor="exampleInputPassword1">Password</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1"
                                                       onChange={handlePassword}/>
                                            </div>
                                            <br/>
                                            <button className="btn btn-success" onClick={login} style={{
                                                margin: "10px",
                                            }}>Login</button>
                                            <button className="btn btn-info" onClick={register}>Register</button>
                                        </Form>
                                    </FormGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LoginReg;