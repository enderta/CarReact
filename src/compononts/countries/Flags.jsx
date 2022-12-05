import React from 'react';
import countries from './countries.json';
import {Button, Card, Modal, Table} from "react-bootstrap";
import '../../baby.css';
import CardsCon from "./CardsCon";
import TableCon from "./TableCon";
import ModalCon from "./ModalCon";
const Flags = () => {
    const [country, setCountry] = React.useState([]);
    const [filter, setFilter] = React.useState([]);
    const [search, setSearch] = React.useState('');



    React.useEffect(() => {
       fetch('https://restcountries.com/v2/all')
              .then(res => res.json())
                .then(data => {
                    setCountry(data.slice(1));
                    setFilter(data.slice(1));
                })

    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        const searchCountry = country.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilter(searchCountry);
    }
    return (
        <div>
            <h1>Countries</h1>
            <input type={'text'} placeholder={'Search'} onChange={handleSearch} style={{margin:"10px"}}/>
            <div className="container">
                <div className="row">
                    {filter.map((item, index) => (
                      <TableCon item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Flags;