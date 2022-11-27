import React from 'react';

const Patient = (props) => {
    return (
        <>
            <tr>
                <td>{props.patient.id}</td>
                <td>{props.patient.firstName}</td>
                <td>{props.patient.lastName}</td>
                <td>{props.patient.email}</td>
                <td>{props.patient.phone}</td>
                <td>{props.patient.gender}</td>
                <td>{props.patient.dob}</td>
                <td>{props.patient.bloodGroup}</td>
                <td>{props.patient.createdDate}</td>

            </tr>
        </>
    );
};

export default Patient;