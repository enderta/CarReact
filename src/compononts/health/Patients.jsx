import React from 'react';
import {Form} from "react-bootstrap";
import PaitensTable from "./PaitensTable";
import Search from "./Search";

const Patients = () => {
    const [id, setId] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [gender,setGender] = React.useState("");
    const [dob,setDob] = React.useState("");
    const [bloodGroup,setBloodGroup] = React.useState("");
    const [createdDate,setCreatedDate] = React.useState("");
    const [search, setSearch] = React.useState("");

   function handleChanges(e) {
        const {name, value} = e.target;
        switch (name) {
            case "id":
                setId(value);
                break;
            case "firstName":
                setFirstName(value);
                break;
            case "lastName":
                setLastName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "phone":
                setPhone(value);
                break;
            case "gender":
                setGender(value);
                break;
            case "dob":
                setDob(value);
                break;
            case "bloodGroup":
                setBloodGroup(value);
                break;
            case "createdDate":
                setCreatedDate(value);
                break;
            default:
                break;

        }

    }

    const [patients, setPatients] = React.useState([]);
   const [filteredPatients, setFilteredPatients] = React.useState([]);

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


    return (
        <div>
            <h1>
                Patients
            </h1>
            <Search search={handleSearch}/>
          <PaitensTable patients={filteredPatients}/>
        </div>

    );
};

export default Patients;