import React from 'react';
import {useParams} from "react-router";
import {Card} from "react-bootstrap";

const OwnerCar = () => {
const [car,setCar]=React.useState({});
const [loading,setLoading]=React.useState(true);
let param=useParams();
React.useEffect(()=>{
    fetch(`http://localhost:8081/api/cars/${param.id}`)
        .then(response => response.json())
        .then(data => {
                setCar(data);
                setLoading(false);
            }
        );

}
    ,[]);
    console.log(car);
    return (
        <div>
            <h1>Car</h1>
            {loading ? <p>Loading...</p> : (
                <div>
                    <Card variant="dark" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{car.brand}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{car.model}</Card.Subtitle>
                            <Card.Text>
                               <h6>
                                  Year: {car.year}
                               </h6>
                            </Card.Text>
                            <Card.Text>
                                 <h6>
                                    Color: {car.color}
                                    </h6>
                            </Card.Text>
                            <Card.Text>
                                    <h6>
                                        Price: {car.price}
                                    </h6>
                            </Card.Text>





                        </Card.Body>
                    </Card>
                </div>
            )}
            
        </div>
    );
};

export default OwnerCar;