import React from 'react';
import UserModal from "./UserModal";
import {Button} from "react-bootstrap";

const Crud2Table = (props) => {
    const [show, setShow] = React.useState(false);
    return (
       <tr>
              <td>
                   <Button variant="primary" onClick={() => setShow(true)}>
                          {props.user.id}
                     </Button>
                  <UserModal user={props.user} show={show} setShow={setShow}/>
              </td>
                <td>{props.user.name}</td>
                <td>{props.user.surname}</td>
                <td>{props.user.title}</td>

       </tr>
    );
};

export default Crud2Table;