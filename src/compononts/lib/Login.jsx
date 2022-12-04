import {Button, Image} from "react-bootstrap";

const Login = () => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")


    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleLogin = (e) => {
        e.preventDefault()
        if (email === "admin@gmail" && password === "admin") {
            window.location.href = "/home"
        } else {
            alert("Invalid email or password")
        }
    }

    return (
        <div>
            <div>
                <Image src={require('./pexels-ersan-13864601.jpg')}
                       style={{position: 'absolute', opacity: '0.3', height: "100%", width: "100%"}}/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                            <div className="card" style={{
                                border: "1px solid",
                                padding: '10px',
                                margin: "10px",
                                position: 'absolute',
                                top: '25%',
                                left: "25%",
                                right: "25%"
                            }}>
                            <div className="card-body">
                                <h1 className="card-title">Birmingham Library</h1>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email </label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                                  aria-describedby="emailHelp" onChange={handleEmail}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"
                                                    onChange={handlePassword}/>
                                    </div>
                                   <br/>
                                    <Button variant="primary" onClick={handleLogin}>Login</Button>
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