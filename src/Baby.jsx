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
        setFavorite([...favorite, item]);
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
            <div>
                <input type="text" placeholder="Search" value={search} onChange={handleChange}/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1>Favorite</h1>
                        <ul>
                            {
                                favorite.map((item, index) => {
                                        return (
                                            <li key={index} className={item.sex} onClick={() => removeFavorite(item)}>
                                                {
                                                    item.sex === 'm' ?
                                                        <button style={{
                                                            color: 'blue',
                                                            border: "1px solid"
                                                        }}>{item.name}</button>
                                                        :
                                                        <button
                                                            style={{color: 'red', border: "1px solid"}}>{item.name}</button>
                                                }
                                            </li>
                                        )
                                    }
                                )
                            }
                            <br/>
                            <br/>
                        </ul>
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <div>
                                        <h1>Names</h1>
                                        <ul>
                                            {
                                                filtered.map((item, index) => {
                                                    return (
                                                        <li className={item.sex} key={index}
                                                            onClick={() => addFavorite(item)}>
                                                            {
                                                                item.sex === 'm' ?
                                                                    <button style={{
                                                                        color: 'blue',
                                                                        border: "1px solid"
                                                                    }}>{item.name}</button>
                                                                    :
                                                                    <button style={{
                                                                        color: 'red',
                                                                        border: "1px solid"
                                                                    }}>{item.name}</button>

                                                            }
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Baby;