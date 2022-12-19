import React from 'react';
import JobTrcTable from "./JobTrcTable";
import {Button, Table} from "react-bootstrap";

const JobTrc = () => {
    const [jobs, setJobs] = React.useState([]);
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
            fetch('http://localhost:3001/jobs')
                .then(res => res.json())
                .then(data => {
                    setJobs(data);
                })
        }
        , []);

    const handleShow = () => setShow(true);
    return (
        <div>
            <div>
                <Button variant={'success'} onClick={handleShow} >
                    New Application
                </Button>
            </div>
            <Table variant={'dark'} striped bordered hover>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Company</th>
                    <th>Position</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Result</th>
                </tr>
                </thead>
                <tbody>
                {
                    jobs.map((job) => (
                        <JobTrcTable key={job.id} job={job}/>
                    ))
                }
                </tbody>
            </Table>
        </div>
    );
};


export default JobTrc;