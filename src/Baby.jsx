import React from 'react';
import demo from './demo.json';
import './baby.css'

const Baby = () => {
    //sort the array by name in ascending order object
    const sortedByName = demo.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            } else if (a.name < b.name) {
                return -1;
            } else {
                return 0;
            }
        }
    );

    const [search, setSearch] = React.useState('');
    const [filtered, setFiltered] = React.useState(sortedByName);
    const [favorite, setFavorite] = React.useState([]);

    const handleChange = (e) => {
        setSearch(e.target.value);
        setFiltered(sortedByName.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase())));
    }

    const addFavorite = (item) => {
        setFavorite([...favorite, item].sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            } else if (a.name < b.name) {
                return -1;
            } else {
                return 0;
            }

        }));
        setFiltered(filtered.filter((i) => i.id !== item.id).sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                } else if (a.name < b.name) {
                    return -1;
                } else {
                    return 0;
                }
            }
        ));
    }
    const removeFavorite = (item) => {
        setFavorite(favorite.filter((i) => i.id !== item.id));
        setFiltered([...filtered, item].sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            } else if (a.name < b.name) {
                return -1;
            } else {
                return 0;
            }
        }));
    }

    return (
        <div>
            <div className="search">
                <input type="text" placeholder="Search" onChange={handleChange}/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1>Favorite</h1>
                        <ul>
                            {
                            favorite.map((item, index) => {
                            return(
                            <li key={index}>
                                <div className="item">
                                    {
                                    item.sex==='m'?
                                    <button className="btn btn-primary" onClick={() => removeFavorite(item)}>{item.name}</button>:
                                    <button className="btn btn-danger" onClick={() => removeFavorite(item)}>{item.name}</button>
                                    }
                                </div>
                            </li>
                            )}
                            )}

                        </ul>
                    </div>
                    <div className="col-6">
                        <h1>Sorted by name</h1>
                        <ul>
                            {
                            filtered.map((item, index) => {
                            return(
                            <li key={index}>
                                <div className="item">
                                    {
                                        item.sex==='m'?
                                        <button className="btn btn-primary" onClick={() => addFavorite(item)}>{item.name}</button>:
                                        <button className="btn btn-danger" onClick={() => addFavorite(item)}>{item.name}</button>
                                    }
                                </div>
                            </li>
                            )}
                            )}


                        </ul>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Baby;