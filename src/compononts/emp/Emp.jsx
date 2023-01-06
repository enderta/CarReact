import React from 'react';

import {Table} from "react-bootstrap";
import SalaryGrap from "./SalaryGrap";
import Performance from "./Performance";
import TimeLine from "./TimeLine";
import Budeget from "./Budeget";
import * as PropTypes from "prop-types";
import {CardContent, Grid, Typography,Card} from "@mui/material";
import {withStyles} from "@mui/styles";


const Emp = () => {
    const [emp, setEmp] = React.useState([]);
    const [sales, setSales] = React.useState([]);
    const [token, setToken] = React.useState('');



React.useEffect(() => {

    fetch('http://localhost:3001/employees', {
        method: 'GET',
        headers: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV0MkBnbWFpbC5jb20iLCJpYXQiOjE2NzI2Nzc5OTd9.B7p92h6erk-f0DMlJ3NA6kx4Wk7dHyiD-b2dowv07rM'
        },
    }).then(res => res.json())
        .then(data => {
            setEmp(data);
        }
        )
        .catch(err => console.log(err))
}
    , []);

React.useEffect(() => {

    fetch('http://localhost:3001/prod', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV0MkBnbWFpbC5jb20iLCJpYXQiOjE2NzI2Nzc5OTd9.B7p92h6erk-f0DMlJ3NA6kx4Wk7dHyiD-b2dowv07rM'
            }
        }).then(res => res.json())
            .then(data => {
                setSales(data);
            }
            );
    }, []);


    const BlackCard = withStyles({
        root: {
            backgroundColor: '#1e1e1e',
            color: 'black',
            borderRadius: '10px',
            boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)',
            '&:hover': {
                backgroundColor: '#1e1e1e',
            }
        }
    })(Card);


    return (
          <div style={{margin:"10px",textAlign:"center",color:"red",position:'absolute'}}>
              <h1>Dashboard</h1>

              <Grid container spacing={6} >
                  <Grid item xs={12}>
                      <BlackCard>
                            <CardContent style={{background:"black"}}>
                                <Typography color="textSecondary" gutterBottom>
                                    Employees
                                </Typography>
                                <Typography variant="h5" component="div">
                                   <Table striped bordered hover  variant={"dark"}>
                                        <thead>
                                        <tr>
                                            <th>Employee Name</th>
                                            <th>Salary</th>
                                            <th>Department</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {emp.map((item) => (
                                            <tr>
                                                <td>{item.name}</td>
                                                <td>{item.salary}</td>
                                                <td>{item.department}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </Table>
                                </Typography>
                            </CardContent>

                      </BlackCard>
                  </Grid>
                  <Grid  item xs={6}>
                      <Black >
                         <CardContent >
                                <Typography color="textSecondary" gutterBottom>
                                   Salary Graph
                                </Typography>

                                    <SalaryGrap/>

                         </CardContent>
                      </Black>
                  </Grid>
                  <Grid item xs={6}>
                      <Card>
                          <CardContent>
                              <Typography color="textSecondary" gutterBottom>
                                 Performance
                              </Typography>

                            <Performance/>

                          </CardContent>
                      </Card>
                  </Grid>
                  <Grid item xs={6}>
                      <Card>
                          <CardContent>
                              <Typography color="textSecondary" gutterBottom>
                                Growth
                            </Typography>

                             <TimeLine/>

                          </CardContent>
                      </Card>
                  </Grid>
                  <Grid item xs={6}>
                      <Card>
                          <CardContent>
                              <Typography color="textSecondary" gutterBottom>
                                  Budget
                              </Typography>

                              <Budeget/>

                          </CardContent>
                      </Card>
              </Grid>
                </Grid>


        </div>

        );
};

export default Emp;