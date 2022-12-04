import React from 'react';
import {Button, Card, Modal} from "react-bootstrap";
import ModalCon from "./ModalCon";
import '../../baby.css';

const TableCon = (props) => {
    const [show, setShow] = React.useState(false);

    const handleShow = () => setShow(true);

    return (


            <>
                <div className="col-md-4" >
                    <div className="card mb-4 " style={{background:"black",border:"#D43C31 solid",margin:'2px',padding:'2px'}}>
                        <img src={props.item.flag} style={{"height":"500px",'weihgt':"200px"}} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5  style={{color:"green"}} className="card-title">Name: {props.item.name}</h5>
                            <p style={{color:"green"}} className="card-text">Capital: {props.item.capital}</p>
                        </div>
                        <Button variant="primary" onClick={handleShow}>Go somewhere</Button>
                        <ModalCon show={show} setShow={setShow} item={props.item}/>
                    </div>
                </div>

            </>


    );
};

export default TableCon;