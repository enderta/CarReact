import React from 'react';
import NavBarS from "./NavBarS.jsx";

const Owners = () => {
    const [owners, setOwners] = React.useState([]);
    const [filtered, setFiltered] = React.useState(owners);
    const [picture, setPicture] = React.useState([]);


    const handleSearch = (e) => {
        if(e.target.value === ''){
            setFiltered(owners);
        }else{
            setFiltered(owners.filter((owner) => owner.name.toLowerCase().includes(e.target.value.toLowerCase())));
        }
    }

    React.useEffect(() => {
        fetch('http://localhost:3001/owners')
            .then(res => res.json())
            .then(data => {
                setOwners(data);
                setFiltered(data);
            });
    },[])

    React.useEffect(() => {
        fetch('https://randomuser.me/api/?results=100')
            .then(res => res.json())
            .then(data => {
                setPicture(data.results);
            });
    },[])


    return (
        <div>
            <div>
                <NavBarS filter={setFiltered} search={handleSearch} />
            </div>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            filtered.map((owner, index) => (
                                <div className="col" key={index}>
                                    <div className="card shadow-sm">
                                      <img src={picture[owner.id].picture.large}/>
                                        <div className="card-body">
                                            <p className="card-text">{owner.name}</p>
                                            <p className="card-text">{owner.email}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-sm btn-outline-secondary">Home</button>
                                                    <button type="button" className="btn btn-sm btn-outline-secondary">Add Home</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Owners;