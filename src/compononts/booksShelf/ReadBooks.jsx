import React from 'react';

const ReadBooks = (props) => {
    return (

            <tr>
                <td>{props.book.title}</td>
                <td>{props.book.author}</td>
                <td>{props.book.publishDate}</td>
            </tr>


    );
};

export default ReadBooks;