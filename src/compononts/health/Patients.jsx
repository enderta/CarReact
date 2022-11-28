import React, {useContext} from 'react';
import {Form} from "react-bootstrap";
import PaitensTable from "./PaitensTable";
import Search from "./Search";
import ScrollToTop from "../moives-series/ScrollToTop";
export const PatientContext= React.createContext();
const Patients = (props) => {
    const [patients, setPatients] = React.useState([]);
    const [filteredPatients, setFilteredPatients] = React.useState([]);
    const [search, setSearch] = React.useState("");



    React.useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjc5IiwiYXV0aCI6IlJPTEVfQURNSU4iLCJleHAiOjE2NzIxNDY1MTd9.0rDGWWqyjRNtq3ToA05z87tdFNs5otxw58-UyUYU9_cZRvyPjPOQ3k5X5QL28UWKIFI-Q2QawX_ClXftr4UDaA");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://medunna.com/api/patients?page=0&size=20&sort=id,asc&cacheBuster=1669560508207", requestOptions)
            .then(response => response.json())
            .then(result => {
                setPatients(result);
                setFilteredPatients(result);
            }
            )
            .catch(error => console.log('error', error));
    }, []);
    const handleSearch=(e)=>{
        setSearch(e.target.value);
        setFilteredPatients(patients.filter((patient)=>patient.firstName.toLowerCase().includes(e.target.value.toLowerCase())));
    }
   const handleDelete=(id)=>{
        setFilteredPatients(filteredPatients.filter((patient)=>patient.id!==id));

   }



    return (
        <div>
            <ScrollToTop/>
            <h1>
                Patients
            </h1>
          <PatientContext.Provider value={{filteredPatients,handleSearch,handleDelete}}>
                <Search search={search} handleSearch={handleSearch}/>
              <PaitensTable patient={filteredPatients} handleDelete={handleDelete} />
            </PatientContext.Provider>
        </div>

    );
};

export default Patients;