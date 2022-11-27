import React, {useContext} from 'react';
import {PatientContext} from "./Patients";

const Patient = ({patient}) => {
    const del=useContext(PatientContext);
    const handleDelete=()=>{
        del.handleDelete(patient.id);
     /*   let myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjc5IiwiYXV0aCI6IlJPTEVfQURNSU4iLCJleHAiOjE2NzIxNDY1MTd9.0rDGWWqyjRNtq3ToA05z87tdFNs5otxw58-UyUYU9_cZRvyPjPOQ3k5X5QL28UWKIFI-Q2QawX_ClXftr4UDaA");

        let requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://medunna.com/api/patients/"+patient.id, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));*/
    }
    return (
        <>
            <tr>
                <td>{patient.id}</td>
                <td>{patient.firstName}</td>
                <td>{patient.lastName}</td>
                <td>{patient.email}</td>
                <td>{patient.phone}</td>
                <td>{patient.gender}</td>
                <td>{patient.birthDate}</td>
                <td>{patient.bloodGroup}</td>
                <td>{patient.createdDate}</td>
                <td>
                    <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </td>
            </tr>
        </>
    );
};

export default Patient;