import React from 'react';
import {useParams} from "react-router";
import {Card} from "react-bootstrap";

const OwnerCar = () => {
const [owner,setOwner]=React.useState({});
const [loading,setLoading]=React.useState(true);
let param=useParams();
React.useEffect(()=>{
    fetch(`http://localhost:8081/api/owners/${param.id}`)
        .then(response => response.json())
        .then(data => {
                setOwner(data);
                setLoading(false);
            }
        );

}
    ,[]);

    return (
        <div>
            <h1>Owner</h1>
            {loading ? <p>Loading...</p> : (
                <div>
                    <Card variant="dark" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{owner.firstName} {owner.lastName}</Card.Title>
                            <Card.Text>
                                {owner.address}
                            </Card.Text>
                            <Card.Text>
                                {owner.city}
                            </Card.Text>
                            <Card.Text>
                                {owner.email}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
            )}
            
        </div>
    );
};

export default OwnerCar;