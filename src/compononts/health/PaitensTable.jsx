import React from 'react';
import Patient from "./Patient";

const PaitensTable = (props) => {
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
                </tr>
                </thead>
                <tbody>
                {
                    props.patients.map((patient) => (
                        <Patient patient={patient}/>
                    ))

                }
                </tbody>
            </table>


        </div>
    );
};

export default PaitensTable;