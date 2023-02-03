import React from 'react';
import NavBarS from "./NavBarS.jsx";
import Cards from "./Cards.jsx";

const Owners = () => {
    const [owners, setOwners] = React.useState([]);
    const [filtered, setFiltered] = React.useState(owners);
    const handleSearch = (e) => {
        if (e.target.value === '') {
            setFiltered(owners);
        } else {
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
    }, [])

    return (
        <div>
            <div className="container py-4">
                <div>
                    <NavBarS filter={setFiltered} search={handleSearch}/>
                </div>
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {
                                filtered.map((owner, index) => (
                                    <Cards owner={owner} id={owner.id}
                                           pic={`https://randomuser.me/api/portraits/men/${owner.id}.jpg`}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Owners;