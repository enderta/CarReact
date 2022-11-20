import React from 'react';
import {useParams} from "react-router";

const EditBook = (props) => {
    const [isbn, setIsbn] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [author, setAuthor] = React.useState("");
    const [catagory, setCatagory] = React.useState("");
    const [year, setYear] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [id, setId] = React.useState("");

    React.useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("x-library-token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoiNTgzNiIsImZ1bGxfbmFtZSI6IlRlc3QgTGlicmFyaWFuIDI0IiwiZW1haWwiOiJsaWJyYXJpYW4yNEBsaWJyYXJ5IiwidXNlcl9ncm91cF9pZCI6IjIifSwiaWF0IjoxNjY3Mzg3NjA1LCJleHAiOjE2Njk5Nzk2MDV9.P8Y0XKzwiZjRA8718Q3pGOaTodEI5rGi9KL_SUbhrm0");
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'

        }
        fetch(`https://library2.cydeo.com/rest/v1/get_book_by_id/${props.book.id}`,requestOptions)
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
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="isbn">ISBN</label>
                    <input type="text" className="form-control" id="isbn" value={isbn} onChange={(e) => setIsbn(e.target.value)}/>
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <label htmlFor="author">Author</label>
                    <input type="text" className="form-control" id="author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                    <label htmlFor="catagory">Catagory</label>
                    <input type="text" className="form-control" id="catagory" value={catagory} onChange={(e) => setCatagory(e.target.value)}/>
                    <label htmlFor="year">Year</label>
                    <input type="text" className="form-control" id="year" value={year} onChange={(e) => setYear(e.target.value)}/>
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <label htmlFor="id">ID</label>
                    <input type="text" className="form-control" id="id" value={id} onChange={(e) => setId(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default EditBook;