import React from 'react';
import {Button, Card, Modal} from "react-bootstrap";
import ModalCon from "./ModalCon";
import '../../baby.css';

const TableCon = (props) => {
    const [show, setShow] = React.useState(false);

    const handleShow = () => setShow(true);

    return (


            <>
                <div className="col-md-3" >
                    <div className="card mb-4 shadow-sm" style={{"height":"400px",'weihgt':"400px",background:"black",border:"#D43C31 solid",margin:'2px',padding:'2px'}}>
                        <img src={props.item.flag} style={{"height":"400px",'weihgt':"400px"}} className="card-img-top" />
                        <div style={{color:"green"}}  className="card-body">
                            <p style={{color:"green"}}  className="card-text">{props.item.name}</p>
                            <p style={{color:"green"}}  className="card-text">{props.item.capital}</p>
                            <div className="d-flex justify-content-between align-items-center">
                            </div>
                            <Button variant="primary" onClick={handleShow}>Details</Button>

                        </div>
                        <ModalCon show={show} setShow={setShow} item={props.item}/>
                    </div>
                </div>

            </>


    );
};

export default TableCon;