import React from 'react';

const Login = () => {
    const login=[{email:"admin@gmail.com",password:"admin"}]
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");




    console.log(email);

    return (
        <div>
            <form onSubmit={
                (e) => {
                    e.preventDefault();
                    const user = login.find(user => user.email === email && user.password === password);
                    if (user) {
                        window.location.href = "/home";
                    } else {
                        alert("Login Failed");
                    }
                }
            }>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>


        </div>
    );
};

export default Login;