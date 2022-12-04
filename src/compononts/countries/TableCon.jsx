import React from 'react';
import {Button, Modal} from "react-bootstrap";
import ModalCon from "./ModalCon";

const TableCon = (props) => {
    const [show, setShow] = React.useState(false);

    const handleShow = () => setShow(true);

    return (


            <tr>
                <td>
                    <img src={props.item.flag}/>
                </td>
             <td>
                 {props.item.name}
             </td>
                <td>
                    {props.item.capital}
                </td>
                <td>
                    <Button variant="primary" onClick={handleShow}>
                        Show
                    </Button>
               <ModalCon show={show} setShow={setShow} item={props.item}/>
                </td>

            </tr>



    );
};

export default TableCon;