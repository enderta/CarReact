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
    const handleClickGender = (e) => {
        if (e.target.value=== 'm'){
            setFiltered(sortedByName.filter((item) => item.sex==='m'));
        }else if (e.target.value==='f'){
            setFiltered(sortedByName.filter((item) => item.sex==='f'));
        }
        else {
            setFiltered(sortedByName);
        }

    }
    const handleChange = (e) => {
        setSearch(e.target.value);

    }
    React.useEffect(() => {
        setFiltered(sortedByName.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())));
    }
        , [search]);
    const handledelete = (item) => {
        setFiltered(filtered.filter((i) => i.id !== item.id));
    }

    return (
        <div>
            <div className="search">
                <input type="text" placeholder="Search..." value={search} onChange={handleChange}/>

                <span>
                    <button  style={{margin:'1px'}} className="btn btn-primary" onClick={handleClickGender} value="m" name={'male'}>Male</button>
                    <button style={{margin:'1px'}} className="btn btn-danger" onClick={handleClickGender} value={'f'} name={'female'} >Female</button>
                    <button style={{margin:'1px'}} className="btn btn-success" onClick={handleClickGender} value={'all'} name={'all'} >All</button>
                </span>
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