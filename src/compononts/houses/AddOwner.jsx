import React from 'react';

const AddOwner = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const handleChange = (e) => {
        if (e.target.name === 'name') {
            setName(e.target.value);
        } else if (e.target.name === 'email') {
            setEmail(e.target.value);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newOwner = {
            name: name,
            email: email
        }
        fetch('http://localhost:3001/owners', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOwner)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })
        window.location.reload();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name={'name'} value={name}
                           onChange={handleChange}/>
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" id="email" name={'email'} value={email}
                           onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddOwner;