import React, {useContext} from 'react';
import {PatientContext} from "./Patients";
import {Modal} from "react-bootstrap";
import ModalPaitent from "./ModalPaitent";
import EditPat from "./EditPat";

const Patient = ({patient}) => {
    const del=useContext(PatientContext);
    const [show, setShow] = React.useState(false);


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
    const handleEdit=()=>{
        setShow(true);
    }
    const [country, setCountry] = React.useState("");
    const handleShow=(id)=>{
        setShow(true);
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjc5IiwiYXV0aCI6IlJPTEVfQURNSU4iLCJleHAiOjE2NzIxNDY1MTd9.0rDGWWqyjRNtq3ToA05z87tdFNs5otxw58-UyUYU9_cZRvyPjPOQ3k5X5QL28UWKIFI-Q2QawX_ClXftr4UDaA");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://medunna.com/api/patients/"+id, requestOptions)
            .then(response => response.json())
            .then(result => setCountry(result.country))
            .catch(error => console.log('error', error));
    }
    const tableSort=(event)=>{
        const sortField=event.target.dataset.sort;
        const cloneData=del.filteredPatients.concat();
        const sortType=event.target.dataset.sortType;
        const order=sortType==='asc'?1:-1;
        const sortData=cloneData.sort((a,b)=>{
            return a[sortField]>b[sortField]?order:-order;
        });
        del.setFilteredPatients(sortData);
        event.target.dataset.sortType=sortType==='asc'?'desc':'asc';
    }

    return (
        <>
            <tr role={"row"} >
                {/*sorted table*/}
                <td onClick={tableSort} data-sort={"id"} data-sort-type={"asc"}>{patient.id}</td>
                <td onClick={tableSort} data-sort={"firstName"} data-sort-type={"asc"}>{patient.firstName}</td>
                <td onClick={tableSort} data-sort={"lastName"} data-sort-type={"asc"}>{patient.lastName}</td>
                <td onClick={tableSort} data-sort={"email"} data-sort-type={"asc"}>{patient.email}</td>
                <td onClick={tableSort} data-sort={"phone"} data-sort-type={"asc"}>{patient.phone}</td>
                <td onClick={tableSort} data-sort={"gender"} data-sort-type={"asc"}>{patient.gender}</td>
                <td onClick={tableSort} data-sort={"dob"} data-sort-type={"asc"}>{patient.birthdate}</td>
                <td onClick={tableSort} data-sort={"blood"} data-sort-type={"asc"}>{patient.bloodGroup}</td>
                <td onClick={tableSort} data-sort={"createdDate"} data-sort-type={"asc"}>{patient.createdDate}</td>

                    <td>
                    <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </td>
                <td>
                    <button className="btn btn-primary" onClick={()=>handleShow(patient.id)}>Show</button>
                    <Modal show={show} onHide={() => setShow(false)}>

                        <ModalPaitent patient={patient} country={country}/>
                    </Modal>
                </td>
                <td>
                    <button className="btn btn-primary" onClick={handleEdit}>Edit</button>
                 <Modal show={show} onHide={() => setShow(false)}>
                            <EditPat patient={patient} />

                </Modal>
                </td>


            </tr>
        </>
    );
};

export default Patient;