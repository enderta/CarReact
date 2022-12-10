import React from 'react';
import {useNavigate} from "react-router";

const AddUser = () => {
   const [name, setName] = React.useState('');
   const [surname, setSurname] = React.useState('');
    const [title, setTitle] = React.useState('');

const handleSubmit = (e) => {

    e.preventDefault();
    const user = {
        name,
        surname,
        title
    }
    fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err))
   window.location.href = 'http://localhost:3000';

}
    return (
        <div>
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="text" className="form-control" id="surname" placeholder="Enter surname" value={surname} onChange={(e) => setSurname(e.target.value)}/>
                    <input type="text" className="form-control" id="title" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            
        </div>
    );
};

export default AddUser;