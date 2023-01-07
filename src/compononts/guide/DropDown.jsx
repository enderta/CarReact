import React from 'react';
import {Button} from "react-bootstrap";
import CityTable from "./CityTable.jsx";

const DropDown = (props) => {
    const [data, setData] = React.useState([]);
    const [city, setCity] = React.useState("harrow");
    const [category, setCategory] = React.useState("doctors");

    const handleCity = (e) => {
        setCity(e.target.value);

    }
    const handleCategory = (e) => {
        setCategory(e.target.value);

    }

React.useEffect(() => {
    fetch(`http://localhost:3001/${city}/${category}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',

        },
    }).then(res => res.json())
        .then(data => {
                setData(data);
            }
        )
        .catch(err => console.log(err))
}, [data]);
    return (
        <div>
            <select style={{margin:"10px"}} onChange={handleCity}>
                <option value="harrow">Harrow</option>
                <option value="heathrow">Heathrow</option>
                <option value="startford">Startford</option>
            </select>
            <div>
                <Button style={{margin:"10px"}} onClick={handleCategory} value={'doctors'}>Doctors</Button>
                <Button style={{margin:"10px"}} onClick={handleCategory} value={'pharmacies'}>Pharmacies</Button>
                <Button style={{margin:"10px"}} onClick={handleCategory} value={'colleges'}>Colleges</Button>
                <Button style={{margin:"10px"}} onClick={handleCategory} value={'hospitals'}>Hospitals</Button>
            </div>
            <div>
                <CityTable data={data}/>
            </div>


        </div>
    );
};

export default DropDown;