import React from 'react';
import {useParams} from "react-router";
import {Button, Form} from "react-bootstrap";

const EditBook = () => {
    const [isbn, setIsbn] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [author, setAuthor] = React.useState("");
    const [catagory, setCatagory] = React.useState("");
    const [year, setYear] = React.useState("");
   const [description, setDescription] = React.useState("");
   const [id, setId] = React.useState("");
   let param = useParams();

    React.useEffect(() => {
            const myHeaders = new Headers();
            myHeaders.append("x-library-token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoiNTgzNiIsImZ1bGxfbmFtZSI6IlRlc3QgTGlicmFyaWFuIDI0IiwiZW1haWwiOiJsaWJyYXJpYW4yNEBsaWJyYXJ5IiwidXNlcl9ncm91cF9pZCI6IjIifSwiaWF0IjoxNjY3Mzg3NjA1LCJleHAiOjE2Njk5Nzk2MDV9.P8Y0XKzwiZjRA8718Q3pGOaTodEI5rGi9KL_SUbhrm0");
            const requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'

            }
            fetch(`https://library2.cydeo.com/rest/v1/get_book_by_id/${param.id}`,requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setIsbn(data.isbn);
                setTitle(data.name);
                setAuthor(data.author);
                setCatagory(data.book_category_id);
                setYear(data.year);
                setDescription(data.description);
                setId(data.id);
            }
            );
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const myHeaders = new Headers();
            myHeaders.append("x-library-token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoiNTgzNiIsImZ1bGxfbmFtZSI6IlRlc3QgTGlicmFyaWFuIDI0IiwiZW1haWwiOiJsaWJyYXJpYW4yNEBsaWJyYXJ5IiwidXNlcl9ncm91cF9pZCI6IjIifSwiaWF0IjoxNjY3Mzg3NjA1LCJleHAiOjE2Njk5Nzk2MDV9.P8Y0XKzwiZjRA8718Q3pGOaTodEI5rGi9KL_SUbhrm0");
            myHeaders.append("Content-Type", "application/json");
            const fomdata=new FormData();
            fomdata.append("isbn",isbn);
            fomdata.append("title",title);
            fomdata.append("author",author);
            fomdata.append("catagory",catagory);
            fomdata.append("year",year);
            fomdata.append("description",description);
            fomdata.append("id",id);
            const requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: fomdata,
            redirect: 'follow'
            };
            const response = await fetch("https://library2.cydeo.com/rest/v1/update_book", requestOptions);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
            }
    return (
        <div>
            <div className={"container"}>
                <div className={"row"} >
                    <div className={"col-md-6 offset-md-3"} >
                        <Form onSubmit={handleSubmit} style={{border:"1px solid",padding:'10px',margin:"10px",position:'absolute',left:"25%",right:"25%"}}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>ISBN</Form.Label>
                                <Form.Control type="text" placeholder="Enter ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Author</Form.Label>
                                <Form.Control type="text" placeholder="Enter Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Catagory</Form.Label>
                                <Form.Control type="text" placeholder="Enter Catagory" value={catagory} onChange={(e) => setCatagory(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Year</Form.Label>
                                <Form.Control type="text" placeholder="Enter Year" value={year} onChange={(e) => setYear(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Id</Form.Label>
                                <Form.Control type="text" placeholder="Enter Id" value={id} onChange={(e) => setId(e.target.value)} />
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

export default EditBook;