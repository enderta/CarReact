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

                {
                    country.map((item) => {
                            return (
                                <TableCon item={item} />
                            )


                        }
                    )

                }




        </div>
    );
};

export default Flags;