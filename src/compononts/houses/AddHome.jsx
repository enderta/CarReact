import React from 'react';
import {Button} from "react-bootstrap";

const AddHome = (props) => {
    const [postcode, setPostcode] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [forsale, setForsale] = React.useState('');
    const handleChange = (e) => {
        if (e.target.name === 'postcode') {
            setPostcode(e.target.value);
        } else if (e.target.name === 'price') {
            setPrice(e.target.value);
        } else if (e.target.name === 'forsale') {
            setForsale(e.target.value);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newHouse = {
            postcode: postcode,
            price: price,
            forsale: forsale,
            owner_id: props.id
        }
        fetch('http://localhost:3001/houses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newHouse)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })
        window.location.reload();
    }

    return (
        <div>
            <div className="container py-4">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="postcode">Postcode</label>
                        <input type="text" className="form-control" id="postcode" name={'postcode'} value={postcode}
                               onChange={handleChange}/>
                        <label htmlFor="price">Price</label>
                        <input type="text" className="form-control" id="price" name={'price'} value={price}
                               onChange={handleChange}/>
                        <label htmlFor="forsale">For Sale</label>
                        <input type="text" className="form-control" id="forsale" name={'forsale'} value={forsale}
                               onChange={handleChange}/>
                    </div>
                    <br/>
                    <Button type="button" className="btn-outline-success">Submit</Button>
                </form>
            </div>
        </div>
    );
};

export default AddHome;