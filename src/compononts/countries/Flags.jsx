import React from 'react';
import countries from './countries.json';
import {Button, Card, Modal, Table} from "react-bootstrap";
import '../../baby.css';
import CardsCon from "./CardsCon";
import TableCon from "./TableCon";
import ModalCon from "./ModalCon";
const Flags = () => {
    const [country, setCountry] = React.useState([]);
    const [show, setShow] = React.useState(false);

    const handleShow = () => setShow(true);



    React.useEffect(() => {
       fetch('https://restcountries.com/v2/all')
              .then(res => res.json())
                .then(data => setCountry(data.slice(1)))

    }, []);
    console.log(country);
    return (
        <div>

            <div className="container">
                <div className="row">
                    {country.map((item, index) => (
                      <TableCon item={item} />
                    ))}
                </div>
            </div>




        </div>
    );
};

export default Flags;