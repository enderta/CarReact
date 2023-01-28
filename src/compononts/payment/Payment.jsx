import React from 'react';
import data from './demo.json'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Table} from "react-bootstrap";



const Payment = () => {
    const [payment, setPayment] = React.useState(data);
    const [filtered, setFiltered] = React.useState(payment);


    let totalIncome=1000
    let totalExpense=payment.reduce((total, payment) => total + payment.amount, 0);
    let currentBalance=totalIncome-totalExpense;


    const handleSearch = (e) => {
        if(e.target.value === ''){
            setFiltered(payment);
        }else{
            setFiltered(payment.filter((payment) => payment.description.toLowerCase().includes(e.target.value.toLowerCase())));
        }
    }


    return (
        <div>
        <Container id={"payment"}>
            <Navbar expand="xxl" variant="dark" bg="light">
                <Container>
                    <Navbar.Brand href="#" >
                        <h1 style={{textAlign:'center',color:"black"}}>Payment</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
        <Container>
            <Row>
                <Col>
                    <input type="text" placeholder="Search" onChange={handleSearch}/>
                </Col>
            </Row>
        </Container>
            <Container>
                <Row>
                    <Col>
                        <h1>Current Balance: ${currentBalance}
                        </h1>
                    </Col>
                </Row>
            </Container>
            <Container>

                <Table variant={"dark"}>
                    <thead>
                    <tr>
                        <th>
                            <h1>Glance of Acc</h1>
                        </th>
                        <th>
                        </th>
                    </tr>
                    </thead>
                    <thead>
                    <tr>
                        <th>Income</th>
                        <th>Expense</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>${totalIncome}</td>
                        <td>${totalExpense}</td>
                    </tr>
                    </tbody>
                </Table>
            </Container>
            <Container>
                <Table variant={"dark"}>

                    <thead>
                    <tr>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Amount</th>
                        <th>Completed</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filtered.map((payment) => (
                        <tr key={payment.id}>
                            <td>{payment.date}</td>
                            <td>{payment.description}</td>
                            <td>${payment.amount}</td>
                            <td>{
                                payment.completed ? "Yes" : "No"
                            }</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Container>


        </div>
    );
};

export default Payment;