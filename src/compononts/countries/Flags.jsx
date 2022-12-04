import React from 'react';
import countries from './countries.json';
import {Button, Card, Modal, Table} from "react-bootstrap";
import '../../baby.css';
import CardsCon from "./CardsCon";
import TableCon from "./TableCon";
const Flags = () => {
    const [country, setCountry] = React.useState([]);


    React.useEffect(() => {
       fetch('https://restcountries.com/v2/all')
              .then(res => res.json())
                .then(data => setCountry(data.slice(0, 10)))

    }, []);
    console.log(country);
    return (
        <div>
          <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Flag</th>
                    <th>Name</th>
                    <th>Capital</th>
                    <th>show</th>
                </tr>
                </thead>
                <tbody>
                {
                country.map((item) => {
                    return (
                       <TableCon item={item} />
                    )


                }
                )

                }

                </tbody>
            </Table>
        </div>
    );
};

export default Flags;