import React from 'react';

const AddUser = () => {
    const [full_name, setFullName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [user_group_id, setUserGroupId] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [start_date, setStartDate] = React.useState("");
    const [end_date, setEndDate] = React.useState("");
    const [status, setStatus] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const myHeaders = new Headers();
        myHeaders.append("x-library-token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoiNTgzNiIsImZ1bGxfbmFtZSI6IlRlc3QgTGlicmFyaWFuIDI0IiwiZW1haWwiOiJsaWJyYXJpYW4yNEBsaWJyYXJ5IiwidXNlcl9ncm91cF9pZCI6IjIifSwiaWF0IjoxNjY3Mzg3NjA1LCJleHAiOjE2Njk5Nzk2MDV9.P8Y0XKzwiZjRA8718Q3pGOaTodEI5rGi9KL_SUbhrm0");

        const formdata = new FormData();
        formdata.append("full_name", full_name);
        formdata.append("email", email);
        formdata.append("password", password);
        formdata.append("user_group_id", user_group_id);
        formdata.append("start_date", start_date);
        formdata.append("end_date", end_date);
        formdata.append("address", address);
        formdata.append("status", status);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://library2.cydeo.com/rest/v1/add_user", requestOptions)
            .then(response => response.json())
            .then(result => alert(result.message))
            .catch(error => console.log('error', error));
        setAddress("");
        setEmail("");
        setEndDate("");
        setFullName("");
        setPassword("");
        setStartDate("");
        setStatus("");
        setUserGroupId("");
    }

    return (
        <div>
            <div className="container" style={{}}>
                <div className="row" >
                    <div className="col-md-6 offset-md-3" >
                        <form onSubmit={handleSubmit} style={{border:"1px solid",padding:'10px',margin:"10px",position:'absolute',left:"25%",right:"25%"}}>
                            <h4>Add User</h4>
                            <div className="form-group">
                                <label htmlFor="full_name">Full Name</label>
                                <input type="text" className="form-control" id="full_name" name="full_name"
                                       value={full_name} onChange={(e) => setFullName(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" className="form-control" id="email" name="email" value={email}
                                       onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="text" className="form-control" id="password" name="password"
                                       value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="user_group_id">User Group Id</label>
                                <input type="text" className="form-control" id="user_group_id" name="user_group_id"
                                       value={user_group_id} onChange={(e) => setUserGroupId(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input type="text" className="form-control" id="address" name="address" value={address}
                                       onChange={(e) => setAddress(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="start_date">Start Date</label>
                                <input type="text" className="form-control" id="start_date" name="start_date"
                                       value={start_date} onChange={(e) => setStartDate(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="end_date">End Date</label>
                                <input type="text" className="form-control" id="end_date" name="end_date"
                                       value={end_date} onChange={(e) => setEndDate(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="status">Status</label>
                                <input type="text" className="form-control" id="status" name="status" value={status}
                                        onChange={(e) => setStatus(e.target.value)}/>
                            </div>
                            <br/>
                            <button type="submit" className="btn btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AddUser;