import React from 'react';
import Nav from "./Nav";

const AddBook = () => {
    const [isbn, setIsbn] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [author, setAuthor] = React.useState("");
    const [catagory, setCatagory] = React.useState("");
    const [year, setYear] = React.useState("");
    const [description, setDescription] = React.useState("");

    const handleSubmit =(e) => {
        e.preventDefault();
        const myHeaders = new Headers();
        myHeaders.append("x-library-token", "eyeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoiNTgxMyIsImZ1bGxfbmFtZSI6IlRlc3QgTGlicmFyaWFuIDEiLCJlbWFpbCI6ImxpYnJhcmlhbjFAbGlicmFyeSIsInVzZXJfZ3JvdXBfaWQiOiIyIn0sImlhdCI6MTY3MTY0MTAwNywiZXhwIjoxNjc0MjMzMDA3fQ.lr_dknFKJhfh4X7DFtciNQbVSlQ5CvoJsqn9rpBx36s");
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "name": title,
            "isbn": isbn,
            "year": year,
            "author": author,
            "book_category_id": catagory,
            "description": description
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://library2.cydeo.com/rest/v1/add_book", requestOptions)
            .then(response => response.json())
            .then(result => alert(result.message))
            .catch(error => console.log('error', error));
        setIsbn("");
        setTitle("");
        setAuthor("");
        setCatagory("");
        setYear("");
        setDescription("");
    }
    return (
        <div>
            <Nav/>
            <div className="container" style={{}}>
                <div className="row" >
                    <div className="col-md-6 offset-md-3" >
                        <form onSubmit={handleSubmit} style={{border:"1px solid",padding:'10px',margin:"10px",position:'absolute',left:"25%",right:"25%"}}>
                            <h4>Add Book</h4>
                            <div className="form-group">
                                <label htmlFor="isbn">ISBN</label>
                                <input type="text" className="form-control" id="isbn" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="author">Author</label>
                                <input type="text" className="form-control" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="catagory">Catagory</label>
                                <input type="text" className="form-control" id="catagory" value={catagory} onChange={(e) => setCatagory(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="year">Year</label>
                                <input type="text" className="form-control" id="year" value={year} onChange={(e) => setYear(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <input type="text" className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <br/>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default AddBook;