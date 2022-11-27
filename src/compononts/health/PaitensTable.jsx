import React, {useContext} from 'react';
import Patient from "./Patient";
import {PatientContext} from "./Patients";

const PaitensTable = () => {
   const patients=useContext(PatientContext);

    return (
        <div>

            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>DOB</th>
                    <th>Blood Group</th>
                    <th>Created Date</th>
                    <th>Delete</th>
                    <th>Show</th>
                </tr>
                </thead>
                <tbody>
                {
                    patients.filteredPatients.map((patient) => (
                        <Patient patient={patient} />

                    ))

                }
                </tbody>
            </table>


        </div>
    );
};

export default PaitensTable;