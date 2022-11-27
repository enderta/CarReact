import React, {useContext} from 'react';
import {PatientContext} from "./Patients";

const Patient = ({patient}) => {
    const del=useContext(PatientContext);
    const handleDelete=()=>{
        del.handleDelete(patient.id);
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
                <td>{patient.dob}</td>
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