import React from 'react';
import {Button} from "react-bootstrap";
import './pic.css';
const Quote = () => {
    const [quotes, setQuotes] = React.useState([]);
    const [quote, setQuote] = React.useState('');
    const randomNumber= Math.floor(Math.random() * quotes.length );
    React.useEffect(() => {
        fetch('https://type.fit/api/quotes')
            .then(res => res.json())
            .then(data => {
                setQuotes(data);
                setQuote(data[randomNumber]);
            })
    }, []);



    return (

            <div className="container" style={{
                marginTop: "100px",
                display:" grid",
                placeItems: "center",
                textAlign: "center",
                padding: "20px 10px",
                backgroundColor: "white"
            }}>
            <div>
                <h1 className="card-title">{quote.text}</h1>
                <br/>
                <h6 className="card-subtitle mb-2 text-muted">{quote.author}</h6>
            </div>
                <br/>
                <br/>
                <Button style={{margin:"10px"}} variant={"outline-success"} onClick={() => setQuote(quotes[randomNumber])}>New Quote</Button>
            </div>




    );
};

export default Quote;