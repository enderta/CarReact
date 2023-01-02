import React from 'react';
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import MoneyIcon from "@mui/icons-material/Money";
import {Table} from "react-bootstrap";
import SalaryGrap from "./SalaryGrap";
const Emp = () => {
    const [emp, setEmp] = React.useState([]);
    const [sales, setSales] = React.useState([]);
    const [token, setToken] = React.useState('');
  const budget=1000;

  React.useEffect(() => {
    fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "email":"et2@gmail.com",
            "password":"12345678"

        })
    }).then(res => res.json())
        .then(data => {
            if (data.token) {
                localStorage.setItem('token', data.token);
                setToken(data.token);
            } else {
                alert(data.message);
            }
        }
        )
        .catch(err => console.log(err))
}, []);
    console.log(token);
React.useEffect(() => {
    fetch('http://localhost:3001/employees', {
        method: 'GET',
        headers: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            'Content-Type': 'application/json',
            'Authorization': token
        },
    }).then(res => res.json())
        .then(data => {
            setEmp(data);
        }
        )
        .catch(err => console.log(err))
}
    , [token]);

React.useEffect(() => {
    fetch('http://localhost:3001/prod', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }).then(res => res.json())
            .then(data => {
                setSales(data);
            }
            );
    }, [token]);

    console.log(emp);

    return (
        <div>
            <div>
              {/*  <SalaryGrap/>*/}
            </div>
        <div>
            //create dashboard for emp and sales using material ui
            <Grid container spacing={3}>
                <Grid item xs={12} md={4} lg={3}>
                    <Card>
                        <CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    pb: 3
                                }}
                            >
                                <Avatar
                                    sx={{
                                        backgroundColor: 'error.main',
                                        height: 56,
                                        width: 56
                                    }}
                                >
                                    <MoneyIcon />
                                </Avatar>
                            </Box>
                            <Typography
                                align="center"
                                color="textPrimary"
                                gutterBottom
                                variant="h4"
                            >
                                {budget}
                            </Typography>
                            <Typography
                                align="center"
                                color="textSecondary"
                                variant="body1"
                            >
                                Total Budget
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <Card>
                        <CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    pb: 3
                                }}
                            >
                                <Avatar
                                    sx={{
                                        backgroundColor: 'error.main',
                                        height: 56,
                                        width: 56
                                    }}
                                >
                                    <MoneyIcon />
                                </Avatar>
                            </Box>
                            <Typography
                                align="center"
                                color="textPrimary"
                                gutterBottom
                                variant="h4"
                            >
                                {sales}
                            </Typography>
                            <Typography
                                align="center"
                                color="textSecondary"
                                variant="body1"
                            >
                                Total Sales
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <Card>
                        <CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    pb: 3
                                }}
                            >
                                <Avatar
                                    sx={{
                                        backgroundColor: 'error.main',
                                        height: 56,
                                        width: 56
                                    }}
                                >
                                    <MoneyIcon />
                                </Avatar>
                            </Box>
                            <Typography
                                align="center"
                                color="textPrimary"
                                gutterBottom
                                variant="h4"
                            >
                                {emp.length}
                            </Typography>
                            <Typography
                                align="center"
                                color="textSecondary"
                                variant="body1"
                            >
                                Total Employees
                            </Typography>
                        </CardContent>
                    </Card>

                </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12} md={4} lg={3}>
                    <Card>
                        <CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    pb: 3
                                }
                                }
                            >
                                <Table>
                                    <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>name</th>
                                        <th>email</th>
                                        <th>salary</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {emp.map((emp) => (
                                        <tr key={emp.id}>
                                            <td>{emp.id}</td>
                                            <td>{emp.name}</td>
                                            <td>{emp.email}</td>
                                            <td>{emp.salary}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </Table>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </div>
        </div>

    );
};

export default Emp;