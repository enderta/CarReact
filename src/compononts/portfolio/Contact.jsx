import React from 'react';
import {Link} from "react-router-dom";

const Contact = () => {
    const [id, setId] = React.useState(0);
    return (
        <div>
            <button onClick={() => setId(id + 1)}>add</button>
            <div>
                <Link className={'btn btn-primary'} to={`/contact/${id}`}>{id}</Link>
            </div>

        </div>
    );
};

export default Contact;