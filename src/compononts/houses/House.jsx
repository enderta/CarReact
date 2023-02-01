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
    console.log(house)

    return (
        <>
            <div className="col">
                <div className="card shadow-sm">
                    <div className="card-body">
                        {
                            house.map((item, index) => {
                           return(
                                 <>
                                        <p className="card-text">{item.postcode}</p>
                                        <p className="card-text">{item.price}</p>
                                        <p className="card-text">{item.forsale}</p>
                                     </>
                           )

                            })

                        }
                    </div>
                </div>
            </div>
        </>
    )};

export default House;