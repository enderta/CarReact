import React from 'react';

const NavBarS = (props) => {

    return (
        <div>
            <div className="container">
                <a href="#" className="navbar-brand d-flex align-items-center">
                    <strong>Home Owners</strong>
                    <br/>
                   <span>
                        <form className={"d-flex"} style={{margin:'10px'}}>
                        <input className={"form-control me-2"} type={"search"} placeholder={"Search"} aria-label={"Search"} onChange={props.search}/>
                    </form>
                   </span>
                </a>


            </div>

        </div>
    );
};

export default NavBarS;