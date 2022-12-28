import React from 'react';
import {Modal, ModalBody} from "react-bootstrap";

const CreateOwner = (props) => {
    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [email, setEmail] = React.useState('');
    const handleChange=(e)=>{
        if(e.target.name==='name'){
            setName(e.target.value);
        }
        if(e.target.name==='surname'){
            setSurname(e.target.value);
        }
        if(e.target.name==='email'){
            setEmail(e.target.value);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            name,
            surname,
            email
        }
            fetch('http://localhost:3001/owners', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                },
                body: JSON.stringify(user)
            }).then(res => res.json())
                .then(data => {
                    props.setOwners([...props.owners, data]);
                }
                )
                .catch(err => console.log(err))
            window.location.reload();
    }

    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose}   >
                <ModalBody>
                    <form >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" name={'name'} value={name} onChange={handleChange}/>
                            <label htmlFor="surname">Surname</label>
                            <input type="text" className="form-control" id="surname" name={'surname'} value={surname} onChange={handleChange}/>
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" id="email" name={'email'} value={email} onChange={handleChange}/>
                        </div>
                        <button type="submit" className="btn btn-outline-primary" onClick={handleSubmit}>Submit</button>
                    </form>
                </ModalBody>
            </Modal>


        </div>
    );
};

export default CreateOwner;