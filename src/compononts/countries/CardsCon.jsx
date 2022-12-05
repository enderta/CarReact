import React from 'react';
import {Button, Card} from "react-bootstrap";
import ModalCon from "./ModalCon";

const CardsCon = (props) => {
    return (
        <div>
            <Card className="card">
                <Card.Img variant="top" src={props.item.flag} />
                <Card.Body>
                    <Card.Title>{props.item.name}</Card.Title>
                    <Card.Text>
                        {props.item.capital}
                    </Card.Text>
                    <Button variant="primary" onClick={props.handleShow}>Go somewhere</Button>
                    <ModalCon show={props.show} setShow={props.setShow} item={props.item}/>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardsCon;