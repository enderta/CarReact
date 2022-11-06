import React from 'react';

const AddBook = () => {
    const [isbn, setIsbn] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [author, setAuthor] = React.useState("");
    const [catagory, setCatagory] = React.useState("");
    const [year, setYear] = React.useState("");
    const [borrowed, setBorrowed] = React.useState("");
    return (
        <div>
            add book
        </div>
    );
};

export default AddBook;