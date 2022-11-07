import React from 'react';

const AddBook = () => {
    const [isbn, setIsbn] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [author, setAuthor] = React.useState("");
    const [catagory, setCatagory] = React.useState("");
    const [year, setYear] = React.useState("");
    const [description, setDescription] = React.useState("");

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
            const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: fomdata,
            redirect: 'follow'
            };
            const response = await fetch("https://library2.cydeo.com/rest/v1/add_book", requestOptions);
            const data = await response.json();
           const {message}=data;
           alert(message);
        } catch (error) {
            console.log(error);
        }
        setIsbn("");
        setTitle("");
        setAuthor("");
        setCatagory("");
        setYear("");
        setDescription("");
    }
    return (
        <div>
            add book
        </div>
    );
};

export default AddBook;