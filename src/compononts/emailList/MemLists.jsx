import React from 'react';
import {Card} from "react-bootstrap";

const MemLists = (props) => {
    const [mems, setMems] = React.useState([]);
    React.useEffect(() => {
        fetch(`http://localhost:3001/lists/${props.name}/members`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
            .then(data => {
                    setMems(data);
                }
            )
            .catch(err => console.log(err))
    },[props.name])
    console.log(mems);
    return (
        <div>
            {
                mems.map(
                    (item, index) => {
                        return (
                            <Card key={index} style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{item}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{item}</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        )
                    })
            }


        </div>
    );
};

export default MemLists;