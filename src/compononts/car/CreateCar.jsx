import React from 'react';
import {Button, Card, Form} from "react-bootstrap";



const CreateCar = () => {

    const [brand, setBrand] = React.useState('');
    const [model, setModel] = React.useState('');
    const [year, setYear] = React.useState('');
    const [color, setColor] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [registerNumber, setRegisterNumber] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8081/api/cars', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({

                    brand: brand,
                    model: model,
                    year: year,
                    color: color,
                    price: price,
                    registerNumber: registerNumber,

                }),
            });
            const data = await response.json();
            console.log(response.status);
            if (response.status===201) {

                alert("Car created successfully");

            } else {
                setMessage("Some error occured");
            }

        }
        catch (e) {
            console.log(e);
        }
    setPrice('');
    setBrand('');
    setModel('');
    setYear('');
    setColor('');
    setRegisterNumber('');


    }


    return (
        <div>
            <h1>Create Car</h1>

<div style={{display: 'flex', justifyContent: 'center',}}>
               <Card style={{width:"600px",background:"black",color:"red"}}>
                     <Card.Body>
                         <Form  onSubmit={handleSubmit} >
                             <Form.Group >
                                 <Form.Label >Brand</Form.Label>
                                 <Form.Control type="text" placeholder="Enter brand" value={brand} onChange={e=>setBrand(e.target.value)} />
                                 <Form.Label>Model</Form.Label>
                                 <Form.Control type="text" placeholder="Enter model" value={model} onChange={e=>setModel(e.target.value)} />
                                 <Form.Label>Year</Form.Label>
                                 <Form.Control type="number" placeholder="Enter year" value={year} onChange={e => setYear(e.target.value)} />
                                 <Form.Label>Color</Form.Label>
                                 <Form.Control type="text" placeholder="Enter color" value={color} onChange={e => setColor(e.target.value)} />
                                 <Form.Label>Price</Form.Label>
                                 <Form.Control type="number" placeholder="Enter price" value={price} onChange={e => setPrice(e.target.value)} />
                                 <Form.Label>RegisterNumber</Form.Label>
                                 <Form.Control type="number" placeholder="Enter registerNumber" value={registerNumber} onChange={e => setRegisterNumber(e.target.value)} />

                             </Form.Group>
                             <br/>
                             <Button  variant="primary" type="submit">
                                 Create
                             </Button>
                            </Form>
                        </Card.Body>
                    </Card>
           </div>

        </div>
    );
};

export default CreateCar;