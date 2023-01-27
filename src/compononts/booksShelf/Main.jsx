import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Card} from "react-bootstrap";
const Main = () => {
    const [books, setBooks] = React.useState([]);
    const [filter, setFilter] = React.useState(books);
    const[unRead,setUnRead] = React.useState([]);
    const[read,setRead] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3001/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data);
                setFilter(data);
            })
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if(e.target.value === ''){
            setFilter(books);
        }else{
            setFilter(books.filter((book) => book.title.toLowerCase().includes(e.target.value.toLowerCase())));
        }
    }

    React.useEffect(() => {
        setUnRead(filter.filter((book) => book.isRead === false));
        setRead(filter.filter((book) => book.isRead === true));
    }, [filter]);

    return (
        <div>
            <div>
                <Container>
                    <Navbar expand="xxl" variant="dark" bg="light">
                        <Container>
                            <Navbar.Brand href="#" >
                                <h1 style={{textAlign:'center',color:"black"}}>Book Shelf</h1>
                            </Navbar.Brand>
                        </Container>
                    </Navbar>
                </Container>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Card style={{border:'none'}}>
                                <Card.Body>
                                    <Card.Title>Unread Books</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        {unRead.length}
                                    </Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{border:'none'}} >
                                <Card.Body>
                                    <Card.Title>Read Books</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        {read.length}
                                    </Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </div>
    );
};

export default Main;