import React from 'react';
import '../car/car.css';
import {FormGroup} from "react-bootstrap";
const LoginReg = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

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
                window.location.href = 'http://localhost:3000';
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

                window.location.href = 'http://localhost:3000';
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
                   //login and register form
                    <div className="login">
                        <h1>Login</h1>
                        <form style={{position:"absolute"}}>
                            <FormGroup>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={handleEmail}/>
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={handlePassword}/>
                            </FormGroup>
                            <button onClick={login}>Login</button>
                            <button onClick={register}>Register</button>
                        </form>



                </div>

            </div>
        </div>
        </div>
    );
};

export default LoginReg;