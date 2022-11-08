import React from 'react';
import {Button, Form} from "react-bootstrap";
import {useParams} from "react-router";
import Nav from "./Nav";

const EditUser = () => {
    const [full_name, setFullName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [user_group_id, setUserGroupId] = React.useState("");
    const [user_id, setUserId] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [start_date, setStartDate] = React.useState("");
    const [end_date, setEndDate] = React.useState("");
    let param = useParams();
    React.useEffect(() => {
            const myHeaders = new Headers();
            myHeaders.append("x-library-token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoiNTgzNiIsImZ1bGxfbmFtZSI6IlRlc3QgTGlicmFyaWFuIDI0IiwiZW1haWwiOiJsaWJyYXJpYW4yNEBsaWJyYXJ5IiwidXNlcl9ncm91cF9pZCI6IjIifSwiaWF0IjoxNjY3Mzg3NjA1LCJleHAiOjE2Njk5Nzk2MDV9.P8Y0XKzwiZjRA8718Q3pGOaTodEI5rGi9KL_SUbhrm0");
            const requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'

            }

            fetch(`https://library2.cydeo.com/rest/v1/get_user_by_id/${param.id}`,requestOptions)
            .then(response => response.json())
            .then(data => {
                setFullName(data.full_name);
                setEmail(data.email);
                setPassword(data.password);
                setUserGroupId(data.user_group_id);
                setUserId(data.id);
                setAddress(data.address);
                setStartDate(data.start_date);
                setEndDate(data.end_date);
            }
            );
    }
        , []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const myHeaders = new Headers();
            myHeaders.append("x-library-token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoiNTgzNiIsImZ1bGxfbmFtZSI6IlRlc3QgTGlicmFyaWFuIDI0IiwiZW1haWwiOiJsaWJyYXJpYW4yNEBsaWJyYXJ5IiwidXNlcl9ncm91cF9pZCI6IjIifSwiaWF0IjoxNjY3Mzg3NjA1LCJleHAiOjE2Njk5Nzk2MDV9.P8Y0XKzwiZjRA8718Q3pGOaTodEI5rGi9KL_SUbhrm0");
            myHeaders.append("Content-Type", "application/json");
          const fomdata=new FormData();
            fomdata.append("full_name",full_name);
            fomdata.append("email",email);
            fomdata.append("password",password);
            fomdata.append("user_group_id",user_group_id);
            fomdata.append("id",user_id);
            fomdata.append("address",address);
            fomdata.append("start_date",start_date);
            fomdata.append("end_date",end_date);
            const requestOptions = {
                method: 'PATCH',
                headers: myHeaders,
                body: fomdata,
                redirect: 'follow'
            };
            fetch(`https://library2.cydeo.com/rest/v1/update_user`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })
                .catch(error => console.log('error', error));
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <Nav/>
          <div className={"container"}>
                <div className={"row"} >
                    <div className={"col-md-6 offset-md-3"} >
                        <Form onSubmit={handleSubmit} style={{border:"1px solid",padding:'10px',margin:"10px",position:'absolute',left:"25%",right:"25%"}}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Full Name" value={full_name} onChange={(e) => setFullName(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>User Group Id</Form.Label>
                                <Form.Control type="text" placeholder="User Group Id" value={user_group_id} onChange={(e) => setUserGroupId(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>User Id</Form.Label>
                                <Form.Control type="text" placeholder="User Id" value={user_id} onChange={(e) => setUserId(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control type="text" placeholder="Start Date" value={start_date} onChange={(e) => setStartDate(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>End Date</Form.Label>
                                <Form.Control type="text" placeholder="End Date" value={end_date} onChange={(e) => setEndDate(e.target.value)}/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
          </div>
        </div>
    );
};

export default EditUser;