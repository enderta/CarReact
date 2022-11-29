import React from 'react';
import {useParams} from "react-router";

const ContactId = () => {
    let {id} = useParams();
    return (
        <div>
            contact id: {id}    ender

        </div>
    );
};

export default ContactId;