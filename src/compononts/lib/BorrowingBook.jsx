import React from 'react';
import {useParams} from "react-router";

const BorrowingBook = () => {
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    let param = useParams();
    React.useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("x-library-token", "eyeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoiNTgxMyIsImZ1bGxfbmFtZSI6IlRlc3QgTGlicmFyaWFuIDEiLCJlbWFpbCI6ImxpYnJhcmlhbjFAbGlicmFyeSIsInVzZXJfZ3JvdXBfaWQiOiIyIn0sImlhdCI6MTY3MTY0MTAwNywiZXhwIjoxNjc0MjMzMDA3fQ.lr_dknFKJhfh4X7DFtciNQbVSlQ5CvoJsqn9rpBx36s");
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