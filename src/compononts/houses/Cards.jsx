import React from 'react';

const Cards = (props) => {
    console.log(props.owner)


    return (
        <>
            <div className="col">
                <div className="card shadow-sm">
                    <img src={props.pic}/>
                    <div className="card-body">
                        <p className="card-text">{props.owner.name}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small className="text-muted">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default Cards;