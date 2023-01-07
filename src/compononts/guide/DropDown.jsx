import React from 'react';
import {Button} from "react-bootstrap";
import CityTable from "./CityTable.jsx";

const DropDown = (props) => {
    const [data, setData] = React.useState([]);
    const [city, setCity] = React.useState("harrow");
    const [category, setCategory] = React.useState("pharmacies");

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
}, [city,category]);
    return (
        <div>
            <select onChange={handleCity}>
                <option value="harrow">Harrow</option>
                <option value="heathrow">Heathrow</option>
                <option value="startford">Startford</option>
            </select>
            <Button onClick={handleCategory} value={'doctors'}>Doctors</Button>
            <Button onClick={handleCategory} value={'pharmacies'}>Pharmcies</Button>
            <Button onClick={handleCategory} value={'colleges'}>Colleges</Button>
            <Button onClick={handleCategory} value={'hospitals'}>Hospitals</Button>
            <CityTable data={data}/>
        </div>
    );
};

export default DropDown;