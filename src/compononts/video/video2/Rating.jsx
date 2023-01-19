import React from 'react';
import {Button} from "react-bootstrap";

const Rating = (props) => {
    const [rating, setRating] = React.useState(props.id.rating);

    const handleIncrease = () => {
        setRating(rating + 1);

    }
    const handleDecrease = () => {
        setRating(rating - 1);
    }
    const handleDelete = (id) => {
        props.rt(props.v.filter((video) => video.id !== id));

    }

    return (
        <div>
            <div className="container">
                <Button style={{margin:'10px'}} variant="danger" onClick={() => handleDelete(props.id.id)}>Delete</Button>
                <Button style={{margin:'10px'}} variant="success" onClick={() => handleIncrease()}>+</Button>
                <span style={{color:"darkgoldenrod",margin:"10px"}}>
                    {"Rating: " + rating}
                </span>
                <Button style={{margin:'10px'}}  variant="danger" onClick={() => handleDecrease()}>-</Button>

            </div>
        </div>
    );
};

export default Rating;