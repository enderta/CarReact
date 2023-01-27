import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const Main = () => {
    const [books, setBooks] = React.useState([]);
    const [filter, setFilter] = React.useState('');

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

    return (
        <div>
            <div>
                <Container>
                    <Navbar expand="lg" variant="light" bg="light">
                        <Container>
                            <Navbar.Brand href="#">Navbar</Navbar.Brand>
                        </Container>
                    </Navbar>
                </Container>
            </div>
        </div>
    );
};

export default Main;