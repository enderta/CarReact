import React from 'react';
import {Button, Modal} from "react-bootstrap";

const House = (props) => {
   const [house, setHouse] = React.useState([]);

    React.useEffect(() => {
        fetch(`http://localhost:3001/owner/houses/${props.id}`)
            .then(res => res.json())
            .then(data => {
                setHouse(data);
            }
        );
    },[])

    return (
        <>
            {
                house.map((house) => (
                    <div className={"container"}>
                        <div className='col'>
                            <div className='card shadow-sm'>
                                <div className='card-body'>
                                    <p className='card-text'>PostCode: {house.postcode}</p>
                                    <p className='card-text'>Price: {house.price}</p>
                                    <p className='card-text'>Forsale: {house.forsale}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )};

export default House;