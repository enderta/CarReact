import React from 'react';
import {Forum} from "@mui/icons-material";
import {Button, Form} from "react-bootstrap";

const AddBook = () => {
    const[title, setTitle] = React.useState('');
    const[author, setAuthor] = React.useState('');
    const[publish, setPublish] = React.useState('');
    const [read, setRead] = React.useState(false);

   const handleChange = (e) => {
        if(e.target.name === 'title'){
            setTitle(e.target.value);
        }else if(e.target.name === 'author'){
            setAuthor(e.target.value);
        }else if(e.target.name === 'publish'){
            setPublish(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                author,
                publish,
                read
            })
        }).then(res => res.json())
            .then(data => {
                alert('Book added successfully');
            })
            .catch(err => console.log(err))

        window.location.reload();
    }


    return (
        <div>
            <h1>Add Book</h1>
            <Form style={{height:"200px",width:"200px",border:"1px"}}>
                <Form.Group className="mb-2" controlId="formBasicEmail" >
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" name={'title'} value={title} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="Enter author" name={'author'} value={author} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Publish Date</Form.Label>
                    <Form.Control type="text" placeholder="Enter publish date" name={'publish'} value={publish} onChange={handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>

            </Form>

        </div>
    );
};

export default AddBook;