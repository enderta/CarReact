import React from 'react';
import Form from "react-bootstrap/Form";
import MemLists from "./MemLists.jsx";

const Lists = () => {
    const [emails, setEmails] = React.useState([]);
   const [name, setName] = React.useState('staff');
    React.useEffect(() => {
        fetch('http://localhost:3001/lists', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
            .then(data => {
                    setEmails(data);
                }
            )
            .catch(err => console.log(err))
    },[])

    const handleName = (e) => {
        setName(e.target.value);
    }
    return (
        <div>
            <h1>Lists</h1>
            <Form.Select style={{margin:"10px",width:"200px"}} onChange={handleName}>
                {
                    emails.map(
                        (item, index) => {
                            return (
                                <option key={index} value={item.name}>{item.name}</option>
                            )
                        }
                    )
                }
            </Form.Select>
            <MemLists name={name}/>
        </div>
    );
};

export default Lists;