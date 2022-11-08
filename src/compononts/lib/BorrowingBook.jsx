import React from 'react';
import {useParams} from "react-router";

const BorrowingBook = () => {
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    let param = useParams();
    React.useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("x-library-token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoiNTgzNiIsImZ1bGxfbmFtZSI6IlRlc3QgTGlicmFyaWFuIDI0IiwiZW1haWwiOiJsaWJyYXJpYW4yNEBsaWJyYXJ5IiwidXNlcl9ncm91cF9pZCI6IjIifSwiaWF0IjoxNjY3Mzg3NjA1LCJleHAiOjE2Njk5Nzk2MDV9.P8Y0XKzwiZjRA8718Q3pGOaTodEI5rGi9KL_SUbhrm0");
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "book_id": param.id,
            "user_id": 1
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://library2.cydeo.com/rest/v1/book_borrow", requestOptions)
            .then(response => response.json())
            .then(result => {
                setData(result);
                setLoading(false);
            }
            )
    }, []);
    return (
        <div>
            {loading ? <div><h3>Borrowing...</h3></div> : <div> {data.message}{window.location.href = "/borrowedBooks"}</div>}

        </div>
    );
};

export default BorrowingBook;