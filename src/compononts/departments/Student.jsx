import React from 'react';
import {Table} from "react-bootstrap";

const Student = (props) => {
    const [student, setStudent] = React.useState([]);
    const [search, setSearch] = React.useState("");
    const [filteredStudent, setFilteredStudent] = React.useState(student);

    React.useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("x-library-token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoiNTgzNiIsImZ1bGxfbmFtZSI6IlRlc3QgTGlicmFyaWFuIDI0IiwiZW1haWwiOiJsaWJyYXJpYW4yNEBsaWJyYXJ5IiwidXNlcl9ncm91cF9pZCI6IjIifSwiaWF0IjoxNjY3Mzg3NjA1LCJleHAiOjE2Njk5Nzk2MDV9.P8Y0XKzwiZjRA8718Q3pGOaTodEI5rGi9KL_SUbhrm0");
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'

        }
        fetch(`https://library2.cydeo.com/rest/v1/get_user_by_id/${props.id.id}`,requestOptions)
            .then(response => response.json())
            .then(result => {
                setStudent(result);
                setFilteredStudent(result);
            }
            )
    }, [props.id]);


    const handleChange = (e) => {
        setSearch(e.target.value)

    }


    return (
        <div>
            {
                student.map((item) => {
                    return (
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>Full Name</th>
                                    <th>Email</th>
                                    <th>Group Name</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{item.full_name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.group_name}</td>
                                    <td>{item.status}</td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                    )

                }
                )
            }
            </div>
            );
            };

            export default Student;