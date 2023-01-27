import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Card, Form, FormControl, Table} from "react-bootstrap";
import ReadBooks from "./ReadBooks.jsx";
import UnReadBooks from "./UnReadBooks.jsx";
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
        setUnRead(filter.filter((book) => book.read === false));
        setRead(filter.filter((book) => book.read === true));
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
                            <Form.Control type="text" placeholder="Search" onChange={handleSearch}/>
                        </Col>
                    </Row>
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
            <div>
                <Container>
                    <Table style={{border:'none'}}>
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Published Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filter.filter((book) => book.read === true).map((book, index) => (
                                <ReadBooks book={book}/>
                            )
                        )}
                        </tbody>
                    </Table>
                </Container>
            </div>
            <div>
                <Container>
                    <Table style={{border:'none'}}>
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Published Date</th>
                            <th>Read</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filter.filter((book) => book.read === false).map((book, index) => (
                                <UnReadBooks book={book}/>
                            )
                        )}
                        </tbody>
                    </Table>
                </Container>

            </div>
        </div>
    );
};

export default Main;